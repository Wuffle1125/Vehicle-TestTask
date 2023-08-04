'use client'

import { useQuery } from 'urql'

import { GetOneOfferQuery } from '@/graphql/query'
import VehicleView, { VehicleSkeletonView } from './vehicle.view'

export default function Page({ params }: { params: { slug: string } }) {
  const [result, reexecuteQuery] = useQuery({
    query: GetOneOfferQuery,
    variables: {
      id: params.slug,
    },
  })

  // Read the result
  const { data, fetching, error } = result

  if (error) {
    reexecuteQuery()
  }

  if (fetching) {
    return <VehicleSkeletonView />
  }

  return <VehicleView {...(data.offer.edges[0].node as IOfferObject)} />
}
