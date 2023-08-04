'use client'

import { useQuery } from 'urql'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { appendOffers } from '@/redux/slices/offerSlice'

import { ListOfferQuery } from './query'
import OfferListView from './client.offerlist'

export default function DBSeedPage() {
  const dispatch = useAppDispatch()
  const page = useAppSelector((state) => state.offer.page)

  const query = {
    q: {
      'page-size': 27,
      page,
    },
  }

  // Query for the data (React)
  const [result, reexecuteQuery] = useQuery({
    query: ListOfferQuery,
    variables: query,
  })

  useEffect(() => {
    const payload: IGetOfferV3Response = result?.data

    if (!!payload?.getOffersV3) {
      dispatch(appendOffers(payload.getOffersV3.records))
    }

    return () => {}
  }, [result?.data])

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-2xl font-bold text-center pt-5 pb-10">
        Fetch dummy data
      </h1>
      <OfferListView />
    </div>
  )
}
