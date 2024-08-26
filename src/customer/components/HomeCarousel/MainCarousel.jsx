import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import MainCarouselData from './MainCarouselData'

const MainCarousel = () => {
    const imageStyle = {
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        margin: 'auto',
    }

    const items = MainCarouselData.map((item) => (
        <img
            style={imageStyle}
            className="cursor-pointer -z-10"
            role="presentation"
            src={item.image}
            alt=""
        />
    ))
    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    )
}

export default MainCarousel
