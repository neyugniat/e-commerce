import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const HomeSectionCarousel = ({ data, sectionName }) => {
    const sliderRef = React.useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isEnd, setIsEnd] = useState(false)

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        afterChange: (current) => {
            setActiveIndex(current)
            setIsEnd(current >= items.length - 5) // Adjust based on the number of visible slides
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const slidePrev = () => {
        if (activeIndex > 0) {
            sliderRef.current.slickPrev()
        }
    }

    const slideNext = () => {
        if (!isEnd) {
            sliderRef.current.slickNext()
        }
    }

    const items = data
        .slice(0, 15)
        .filter((item) => {
            return item.id
        })
        .map((item) => <HomeSectionCard key={item.id} product={item} />)

    return (
        <div className="border">
            <h2 className="text-2x1 font-extrabold text-gray-800 py-5">
                {sectionName}
            </h2>
            <div className="relative p-5">
                <Slider ref={sliderRef} {...settings}>
                    {items}
                </Slider>
                {!isEnd && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <ChevronLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}

                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="previous"
                    >
                        <ChevronLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default HomeSectionCarousel
