import BackLink from '@/components/client.back.link'
import GalleryCarousel from '@/components/gallery.carousel'
import Head from 'next/head'
import { ReactNode } from 'react'

export default function VehicleView(props: IOfferObject) {
  const images = props.media.final.map((final) => final.url)

  return (
    <>
      <Head>
        <title>
          {props.brand} {props.model} | Instamotion
        </title>
      </Head>
      <VehicleViewContainer>
        <div className="w-[90%] lg:w-[500px]">
          {images?.length > 0 ? (
            <GalleryCarousel imgs={images} />
          ) : (
            <div className="w-full flex bg-theme-light h-[375px] rounded-lg justify-center items-center text-lg font-semibold">
              No images to show
            </div>
          )}
        </div>
        <VehicleDetails {...props} />
      </VehicleViewContainer>
    </>
  )
}

export function VehicleSkeletonView() {
  return (
    <VehicleViewContainer>
      <div className="w-[500px]">
        <div className="w-full flex bg-theme-light h-[375px] rounded-lg justify-center items-center text-lg font-semibold animate-pulse"></div>
      </div>
      <VehicleDetails />
    </VehicleViewContainer>
  )
}

function VehicleViewContainer({ children }: { children: ReactNode[] }) {
  return (
    <div className="container mx-auto pt-20 px-[5vw]">
      <BackLink />
      <div className="flex max-lg:items-center max-lg:flex-col-reverse gap-x-48 gap-y-10 mt-10">
        {children}
      </div>
    </div>
  )
}

function VehicleDetails(props: any) {
  return (
    <div className="text-xl">
      <p>
        Brand: <b>{props?.brand}</b>
      </p>
      <p>
        Model: <b>{props?.model}</b>
      </p>
      <hr className="my-2" />
      <p>
        Performance: <b>{props?.performance}</b>
      </p>
      <p>
        Color: <b>{props?.color || 'No data'}</b>
      </p>
      <p>
        Category: <b>{props?.category}</b>
      </p>
      <p>
        Condition: <b>{props?.vehicle_type?.condition}</b>
      </p>
      <p>
        Consumption:{' '}
        <b>
          {!props?.drivetrain?.consumption?.consumption_combined
            ? 'No data'
            : `${props?.drivetrain?.consumption?.consumption_combined} ${props?.drivetrain?.consumption?.unit}`}
        </b>
      </p>
      <p>
        Consumer price gross: <b>{props?.im_price?.consumer_price_gross}</b>
      </p>
      <p>
        Registered Date:{' '}
        <b>
          <time>{props?.vehicle_history?.reg_date?.replace('.', '/')}</time>
        </b>
      </p>
    </div>
  )
}
