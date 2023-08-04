import { useEffect, useState } from 'react'

import { GetOfferQuery } from '@/graphql/query'

// custom hooks
import useURLParams from './useURLParams'
import { usePaginatedQuery } from './usePaginatedQuery'

export default function useHomePage() {
  const { searchParam, ...filter } = useURLParams()
  const [lastCursor, setLastCursor] = useState<string | undefined>(undefined)

  const [indexQuery, runQuery] = usePaginatedQuery({
    query: GetOfferQuery,
    variables: {
      // Removing undefined values from the object
      ...JSON.parse(JSON.stringify(filter)),
      after: lastCursor,
    },
    mergeResult(oldData, newData) {
      // for the last response from updated filter query, only store new data
      if (!lastCursor) {
        return {
          ...newData,
          offerCollection: {
            ...newData?.offerCollection,
            edges: [...newData?.offerCollection?.edges!],
          },
        }
      }

      // after fetching more data, merge into one array
      return {
        ...oldData,
        ...newData,
        offerCollection: {
          ...newData?.offerCollection,
          edges: [
            ...oldData?.offerCollection?.edges!,
            ...newData?.offerCollection?.edges!,
          ],
        },
      }
    },
  })

  // Everytime we update the filter option, we re-run the query
  useEffect(() => {
    setLastCursor(undefined)
    runQuery()
  }, [searchParam])

  const fetchMoreHandler = () => {
    setLastCursor(
      indexQuery?.data?.offerCollection?.pageInfo?.endCursor ?? undefined
    )
  }

  return { indexQuery, fetchMoreHandler }
}
