import React from 'react'
import Download from '../Buttons/Download'
import { apple, details1, details2, playstore } from '../../assets'

const FurtherDetails = () => {
    return (
        <section className="bg-layer-8">
            <div className="container mx-auto flex py-20 pb-32 md:flex-row flex-col items-center justify-center">
                <div className='ml-72 relative'>

                    <h1 className='heading-2 text-layer-4'>
                        Players have trouble <br />
                        finding <span className='text-stroke-invert text-layer-8'>new local</span><br />
                        opponents, groups,<br />
                        and tournaments.<br />
                        <span className='text-stroke-invert text-layer-8'>The majority of sports <br />
                            enthusiasts never</span>
                    </h1>
                    <div className='flex items-start justify-between w-[75%] text-layer-3 group'>
                        <img src={details2} alt="arrow-icon" className='mt-auto' />
                        <p className='w-1/2 text-3xl group-hover:cursor-pointer'>get to feel like professional athletes. Existing tournament software is poorly designed.  Sports leagues are focused on the smallest market segment, professionals.</p>
                        <img src={details1} alt="details" className='hidden group-hover:inline-block group-hover:animate-fade absolute bottom-[470px] right-[180px] -rotate-45 rounded-lg w-1/3' />
                    </div>
                    <div className='flex items-center space-x-10 pt-24'>
                        <Download icon={apple} title={`Download on the`} heading={`AppStore`} />
                        <Download icon={playstore} title={`GET IT ON`} heading={`Google Play`} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FurtherDetails