'use client'

import { useAppSelector } from '@/redux/hooks'
import { supabase } from '@/lib/supabase'
import OfferListItem from '../data-fetch/client.offerlist.item'
import { Button } from '@supabase/ui'

export default function SeedPage() {
  const offers = useAppSelector((root) => root.offer.offers)

  const insertRowHandler = async () => {
    for (const offer of offers) {
      if (!offer) {
        continue
      }
      const { data: vehicleType } = await supabase
        .from('vehicle_type')
        .insert({ condition: offer.vehicle_type.condition })
        .select('id')

      const { data: vehicleHistory } = await supabase
        .from('vehicle_history')
        .insert({ reg_date: offer.vehicle_history.reg_date })
        .select('id')

      const { data: imPrice } = await supabase
        .from('im_price')
        .insert({ consumer_price_gross: offer.im_price.consumer_price_gross })
        .select('id')

      const { data: technicalFeatures } = await supabase
        .from('technical_features')
        .insert({
          drive: offer.technical_features.drive,
        })
        .select('id')

      const { data: media } = await supabase
        .from('media')
        .insert({ final: offer.media.final })
        .select('id')

      const { data: fuel } = await supabase
        .from('fuel')
        .insert({ type: offer.drivetrain.fuel.type })
        .select('id')

      const { data: consumption } = await supabase
        .from('consumption')
        .insert({
          unit: offer.drivetrain.consumption.unit,
          consumption_combined:
            offer.drivetrain.consumption.consumption_combined,
        })
        .select('id')

      const { data: drivetrain } = await supabase
        .from('drivetrain')
        .insert({
          transmission_type: offer.drivetrain.transmission_type,
          cc: offer.drivetrain.cc,
          fuel_id: (fuel as any)[0].id,
          consumption_id: (consumption as any)[0].id,
        })
        .select('id')

      await supabase.from('offer').insert({
        brand: offer.brand,
        model: offer.model,
        performance: offer.performance,
        category: offer.category,
        color: offer.color,
        vehicle_type_id: (vehicleType as any)[0].id,
        drivetrain_id: (drivetrain as any)[0].id,
        im_price_id: (imPrice as any)[0].id,
        media_id: (media as any)[0].id,
        technical_features_id: (technicalFeatures as any)[0].id,
        vehicle_history_id: (vehicleHistory as any)[0].id,
      })
    }
  }

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="pt-5 pb-10 text-2xl font-bold text-center">
        Fill Database
      </h1>
      <ol>
        {offers.slice(0, 10).map((offer) => (
          <OfferListItem offer={offer} key={offer?.id} />
        ))}
        {offers.length > 10 && <li className="text-center">...</li>}
      </ol>
      <div className="flex flex-col items-center gap-y-5">
        <p className="max-w-[800px] font-semibold text-center mx-auto pt-10">
          You currently have {offers.length} records in the redux state, can
          fill the database by clicking &quot;Fill Tables&quot; button below
        </p>
        <Button onClick={insertRowHandler}>Fill Tables</Button>
      </div>
    </div>
  )
}
