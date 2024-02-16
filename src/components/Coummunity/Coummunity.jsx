import React from 'react'
import { apple, community, frame, playstore } from '../../assets'
import Download from '../Buttons/Download'

const Coummunity = () => {
    return (
        <section>
            <div className='flex'>

                <div className='mx-auto bg-layer-1 w-[15%] text-center relative'>
                    <img src={frame} alt="frame" className='mx-auto' />
                    <h1 className='absolute bottom-[400px] -left-[320px] heading-1 -rotate-90 w-[350%]'>Energy . <span className='text-stroke-invert'>Focus</span> . Force</h1>
                </div>
                <div className='mx-auto px-8 py-32 w-[85%] bg-layer-5 text-layer-8'>
                    <div className='flex items-center justify-center w-full space-x-10'>
                        <div className=''>
                            <h1 className='heading-2'>Serve, Smash, Connect:<br />Join Community !</h1>
                            <p className='text-2xl'>Point intuitively connects local <br />opponents, groups, and tournaments.
                                <br />
                                <br />
                                Players and clubs join for FREE to grow <br />their competition by adding friends,<br />creating groups, and easily customizing<br />tournaments. </p>
                            <div className='flex items-center space-x-10 pt-12'>
                                <Download icon={apple} title={`Download on the`} heading={`AppStore`} />
                                <Download icon={playstore} title={`GET IT ON`} heading={`Google Play`} />
                            </div>

                        </div>
                        <img src={community} alt="application" className='w-1/4' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coummunity