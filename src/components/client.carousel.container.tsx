'use client'

import React from 'react'
import Slider from 'react-slick'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CarouselContainer(props: { children: any }) {
  return (
    <Slider {...settings} autoplay>
      {props.children}
    </Slider>
  )
}
