import React from 'react'
import { AboutUs, Banner, Coummunity, DownloadApp, Features, Footer, FurtherDetails, Hero, Navbar, Products, Testimonial } from '../../components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Banner />
            <FurtherDetails />
            <AboutUs />
            <Products
                firstTitle={`A Different`}
                firstOutlineTitle={`Products`}
                middleTitle={[`Range `, <br />]}
                lastTitle={`According To`}
                lastOutlineTitle={`Your Needs`}
                styles={`hidden`}
            />
            <DownloadApp />
            <Features />
            <Testimonial />
            <Products
                firstTitle={`Step into `}
                lastOutlineTitle={`Comfort`}
                styles={`inline-block`}
            />
            <Coummunity />
            <Footer />
        </div>
    )
}

export default Home