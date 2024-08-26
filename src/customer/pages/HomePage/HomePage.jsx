import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'
import { lengha_page1 } from '../../../data/LenghaCholi'
import { gounsPage1 } from '../../../data/gouns'
import { kurtaPage1 } from '../../../data/kurta'
import { dressPage1 } from '../../../data/page1'

const HomePage = () => {
    return (
        <div>
            <MainCarousel />

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel
                    data={mens_kurta}
                    sectionName={"Men's Kurta"}
                />
                <HomeSectionCarousel
                    data={lengha_page1}
                    sectionName={"Men's Jeans"}
                />
                <HomeSectionCarousel
                    data={gounsPage1}
                    sectionName={"Women's Goun"}
                />
                <HomeSectionCarousel
                    data={kurtaPage1}
                    sectionName={"Women's Saree"}
                />
                <HomeSectionCarousel
                    data={dressPage1}
                    sectionName={"Women's Dress"}
                />
            </div>
        </div>
    )
}

export default HomePage
