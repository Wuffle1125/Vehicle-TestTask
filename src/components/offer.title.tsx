import { IconImage } from '@supabase/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function OfferTile(props: IOfferObject) {
  const imageUrl = props?.media?.final?.at(0)?.url

  return (
    <Link
      href={'/detail/' + props.id}
      className="border border-theme-light rounded-lg overflow-hidden bg-theme-light hover:scale-105 transition-all duration-150"
    >
      {imageUrl ? (
        <div className="h-[160px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="model preview"
            width={400}
            height={160}
            quality={100}
            draggable={false}
            className="block w-full h-[160px] object-cover hover:scale-125 hover:rotate-3 transition-all duration-150"
          />
        </div>
      ) : (
        <div className="h-[160px] bg-theme flex items-center justify-center gap-x-2">
          <IconImage size={22} />
          No Images
        </div>
      )}
      <div className="py-2 px-4">
        <div className="flex justify-between gap-x-4 flex-wrap">
          <span>
            Brand: <b>{props.brand}</b>
          </span>
          <span>
            Model: <b>{props.model}</b>
          </span>
        </div>
        <span>
          Registered at:{' '}
          <b>{props.vehicle_history.reg_date?.replace('.', '/')}</b>
        </span>
        <br />
        <div className="flex justify-between">
          <span>
            Fuel: <b>{props.drivetrain.fuel.type}</b>
          </span>
          <span>
            Power: <b>{props.performance}</b>
          </span>
        </div>
        <span>
          Consumption:{' '}
          <b>
            {props.drivetrain.consumption.consumption_combined || 0}{' '}
            {props.drivetrain.consumption.unit}
          </b>
        </span>
        <br />

        <span>
          CC: <b>{props.drivetrain.cc}</b>
        </span>
      </div>
    </Link>
  )
}
