'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import OfferListItem from './client.offerlist.item'
import { increasePage } from '@/redux/slices/offerSlice'
import { Button } from '@supabase/ui'

export default function OfferListView() {
  const offer = useAppSelector((state) => state.offer)

  const dispatch = useAppDispatch()

  const fetchMoreHandler = () => dispatch(increasePage())

  return (
    <>
      <ul>
        {offer?.offers?.map((offer, index) => (
          <OfferListItem
            offer={offer}
            key={offer?.im_price?.consumer_price_gross || index}
          />
        ))}
      </ul>

      <div className="mt-10 sticky bottom-10 bg-theme-light p-4 rounded-md mb-5 border-gray-300 border text-center w-fit mx-auto flex flex-col items-center gap-y-4">
        <p>
          You currently fetched {offer.offers.length} dummy data, you can fetch
          more data by click &quot;Fetch More&quot; button below
        </p>
        <Button disabled={offer.loading} onClick={fetchMoreHandler}>
          Fetch More
        </Button>
      </div>
    </>
  )
}
