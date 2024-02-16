import React from 'react'
import Download from '../Buttons/Download'
import { about, apple, frame, playstore } from '../../assets'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutUs = () => {
    return (
        <section>
            <div className='flex'>
                <div className='mx-auto px-8 py-32 w-[55%] bg-layer-2 text-layer-8'>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <div className='flex items-center justify-center w-full space-x-10'>
                            <div >
                                <h1 className='heading-2'>About Us</h1>
                                <p className='text-2xl'>Point intuitively connects local <br />opponents, groups, and tournaments.
                                    <br />
                                    <br />
                                    Players and clubs join for FREE to grow <br />their competition by adding friends,<br />creating groups, and easily customizing<br />tournaments. </p>
                                <div className='flex items-center space-x-10 pt-12'>
                                    <Download icon={apple} title={`Download on the`} heading={`AppStore`} />
                                    <Download icon={playstore} title={`GET IT ON`} heading={`Google Play`} />
                                </div>

                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <img src={about} alt="application" className='w-[30%] object-cover object-center opacity-95' />
                <div className='mx-auto bg-layer-1 w-[15%] text-center relative'>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <img src={frame} alt="frame" className='mx-auto' />
                        <h1 className='absolute bottom-[400px] -left-[320px] heading-1 -rotate-90 w-[350%]'>Energy . <span className='text-stroke-invert'>Focus</span> . Force</h1>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default AboutUs