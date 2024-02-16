import React from 'react'
import Download from '../Buttons/Download'
import { apple, application, playstore } from '../../assets'

const DownloadApp = () => {
    return (
        <section className='bg-layer-2 text-layer-8'>
            <div className=" flex px-48 py-24 md:flex-row flex-col items-center">
                <div className='flex items-start justify-between w-full space-x-1'>
                    <div className='w-[106%]'>
                        <h1 className='heading-2'>Are you on Point</h1>
                        <p className='text-2xl'>Point intuitively connects local <br />opponents, groups, and tournaments.
                            <br />
                            <br />
                            Players and clubs join for FREE to grow <br />their competition by adding friends,<br />creating groups, and easily customizing<br />tournaments. </p>
                        <div className='flex items-center space-x-10 pt-48'>
                            <Download icon={apple} title={`Download on the`} heading={`AppStore`} />
                            <Download icon={playstore} title={`GET IT ON`} heading={`Google Play`} />
                        </div>

                    </div>
                    <img src={application} alt="application" className='w-1/4' />
                    <div className='w-[100%]'>
                        <h1 className='heading-2 text-stroke'>ou on Point</h1>
                        <p className='text-2xl pt-48 pl-8'>Point connects directly to Facebook, Twitter, Instagram, and TikTok so that players can bring competition to their existing social networks and find more challengers!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp