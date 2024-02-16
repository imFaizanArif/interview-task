import React from 'react'
import Ticker from "framer-motion-ticker";
import '../../assets/styles/banner.css'
import { celebrate1, celebrate2 } from '../../assets';
import BannerImage from './BannerImage';
const Banner = () => {
    const brand1 = ['Find', 'Your', 'Opponent',
        celebrate1, celebrate2];
    const brand2 = ['Challenge', 'Your', 'Friends',
        celebrate1, celebrate2,];
    return (
        <div className='bg-layer-8 py-8'>

            <div className={`flex items-center justify-center w-full h-[100px] md:h-24 `}>
                <Ticker speed={20}>
                    {brand1.map((item, index) => (
                        <div
                            key={index}
                            className='pr-12 w-full'
                        >
                            {item == '/src/assets/icons/celebrate1.svg' ? <BannerImage img={celebrate1} /> : (
                                typeof item === 'string' ? (<span className='heading-2'>
                                    {item === 'Find' || item === 'Your' || item === 'Opponent' ? item : ''}
                                </span>) :
                                    (<BannerImage img={celebrate2} />)
                            )
                            }
                        </div>
                    ))}
                </Ticker>

            </div>
            <div className={`flex items-center justify-center w-full h-[100px] md:h-24 `}>
                <Ticker speed={20} direction={1}>
                    {brand2.map((item, index) => (
                        <div
                            key={index}
                            className='pr-12 w-full'
                        >
                            {item == '/src/assets/icons/celebrate1.svg' ? <BannerImage img={celebrate2} /> : (
                                typeof item === 'string' ? (<span className='heading-2 text-stroke-invert text-layer-8'>
                                    {item === 'Challenge' || item === 'Your' || item === 'Friends' ? item : ''}
                                </span>) :
                                    (<BannerImage img={celebrate2} />)
                            )
                            }
                        </div>
                    ))}
                </Ticker>
            </div>
        </div>
    )
}

export default Banner