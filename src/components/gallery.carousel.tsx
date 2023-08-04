import Image from 'next/image'
import CarouselContainer from './client.carousel.container'

export default function GalleryCarousel(props: { imgs: string[] }) {
  return (
    <CarouselContainer>
      {props?.imgs?.map((img) => (
        <Image
          key={img}
          src={img}
          alt="vehicle"
          width={350}
          height={200}
          quality={100}
          className="rounded-lg"
        />
      ))}
    </CarouselContainer>
  )
}
