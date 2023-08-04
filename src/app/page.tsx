'use client'

import { Button } from '@supabase/ui'

import FilterForm from '@/components/client.filter.form'
import OfferTile from '@/components/offer.title'

import MockTiles from '@/components/client.mock.tiles'
import useHomePage from '@/hooks/useHomePage'

export default function Home() {
  const { indexQuery, fetchMoreHandler } = useHomePage()

  console.log(indexQuery)

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-2xl font-bold text-center pb-10 pt-5">
        Instamotion Cars
      </h1>
      <div className="flex max-md:flex-col gap-x-10 gap-y-6 px-[2vw]">
        <FilterForm />
        <div className="pb-20 flex flex-col items-center w-full">
          <div className="w-full grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 pb-20">
            {indexQuery?.data?.offerCollection?.edges.map(
              ({ node, cursor }: { node: IOfferObject; cursor: string }) => (
                <OfferTile key={cursor} {...node} />
              )
            )}
            {indexQuery?.fetching && <MockTiles />}
          </div>

          <Button
            onClick={fetchMoreHandler}
            disabled={
              indexQuery.fetching ||
              !indexQuery?.data?.offerCollection?.pageInfo?.hasNextPage
            }
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  )
}
