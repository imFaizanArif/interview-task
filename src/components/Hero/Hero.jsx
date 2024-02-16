import React from 'react'
import { hero1, phone, qrCode } from '../../assets'
import PrimaryButton from '../Buttons/PrimaryButton'
import '../../assets/styles/fonts.css'
import '../../assets/styles/navbar.css'
const Hero = () => {
    <style>

    </style>
    return (
        <section className="bg-gradient relative">
            <div className="container mx-auto ml-0 flex pt-24 pb-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pl-56 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-hero2 bg-no-repeat bg-contain pb-24">
                    <div className='flex items-start space-x-5'>
                        <img src={qrCode} alt="qr-code" />
                        <h1 className="heading-1 text-white">Build</h1>
                    </div>
                    <p className="heading-1 text-white">
                        <span className='text-stroke'>
                            Community
                        </span>
                        <br />
                        And Challenge
                        <span className='bg-wordCover1 bg-no-repeat bg-center bg-contain'> Then&nbsp;</span>
                        <br />
                        A Match
                    </p>
                    <div className="flex lg:flex-row md:flex-col">
                        <PrimaryButton title='Contact Us' icon={phone} styles={`py-2.5 bg-layer-1 text-layer-2 font-normal`} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end absolute right-0 bottom-0">
                <img className="w-5/6 object-cover object-center rounded" alt="hero" src={hero1} />
            </div>
        </section>
    )
}

export default Hero