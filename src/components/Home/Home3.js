import React, { useContext, useState } from 'react'
import RoomImageSlide from './RoomImageSlide'
import ImageContext from '../../context/Home_Context'
import Row from '../Common/Row'
import Column from '../Common/Column'
import beach from '../../assets/img/beach.jpg'
import bird from '../../assets/img/bird.png'
import butterfly from '../../assets/img/butterfly.jpg'
import forest from '../../assets/img/forest.jpg'
import mountain from '../../assets/img/mountain.jpg'
import vine from '../../assets/img/vine.jpg'
import Slider from 'react-slick'
import './slick-theme.css'
import './slick.css'
import HomeContext from '../../context/Home_Context'

export default function Home3() {
    const data = useContext(ImageContext)
    const settings = {
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: true,
        slidesToShow: 2,
        rows: 2,
        slidesPerRow: 2,
    }

    const { images } = useContext(HomeContext)
    const images2 = images.images2

    const imagess = [mountain, vine, beach, bird, butterfly, forest, mountain, vine, beach, bird, butterfly, forest]
    return (
        <div className="col-start-3 col-end-11 w-full h-auto pt-16 pl-6 pr-6 mt-24">
            <Row className="pl-3 text-3xl font-bold w-full">/특가 할인 숙소/</Row>
            <Slider {...settings}>
                {images2 &&
                    images2.map((image, index) => (
                        <div key={index} className="pl-3 pr-3 w-44 h-44 mt-2">
                            <img className="w-full h-full object-fit rounded-2xl mt-6" src={imagess[index]} alt="" />
                            <Row className="mt-4 text-xs text-gray-500" splitEnabled={false}>{`★${image.d_star} - ${image.d_road}`}</Row>
                            <Row className="mt-0 text-base">{image.d_name}</Row>
                            <Row className="mt-2 text-lg text-gray-500">{`${image.d_discount}%`}</Row>
                            <Row className="mt-0 text-base font-medium text-gray-400 line-through">{`${image.min_r_price}`}</Row>
                            <Row className="mt-0 text-2xl font-bold">{`${Math.round((image.min_r_price * (1 - image.d_discount / 100)) / 100) * 100} ~`}</Row>
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
