import React from 'react'
import { blackApple, facebook, instagram, logo, phone, playstore, x } from '../../assets'
import { PrimaryButton } from '../../components'
import playState from 'tailwindcss-animated/src/utilities/playState'
const Footer = () => {
    return (
        <footer class="bg-layer-2 text-layer-3">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-[33%] pr-32 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={logo} alt="logo" />
                    </a>
                    <p class="mt-4 text-base">Lorem ipsum dolor sit amet consectetur. Est pharetra aliquam ultrices nunc. Volutpat ut congue ornare tempus mauris adipiscing. Eget turpis enim molestie massa ut non commodo sed dignissim. Sapien.</p>
                </div>
                <div class="w-[33%] px-16 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left border-x-[1px] border-layer-3">
                    <h3 className='text-2xl font-semibold text-layer-8'>Invest in Point App</h3>
                    <p class="mt-6 text-base">Let’s talk about business. <a href="#" target='_blank' className='underline'>Click this link </a><br />
                        or contact us.</p>
                    <input type="text" placeholder='Name' className='border-b-[1px] border-layer-3 bg-transparent w-full py-3' />
                    <input type="text" placeholder='Email' className='border-b-[1px] border-layer-3 bg-transparent w-full py-3 pt-6' />
                    <div className='my-8 text-right'>

                        <PrimaryButton title={`Contact Us`} icon={phone} styles={`py-2.5 bg-layer-1 text-layer-2 font-normal`} />
                    </div>
                </div>
                <div class="w-[33%] pl-16 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <h3 className='text-2xl font-semibold text-layer-8'>Download mobile app</h3>
                    <p class="mt-6 text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.</p>
                    <div className='mt-12 space-x-4'>
                        <PrimaryButton title={`APP STORE`} icon={blackApple} styles={`py-3 bg-layer-1 text-layer-2 font-medium `} />
                        <PrimaryButton title={`GOOGLE PLAY`} icon={playstore} styles={`py-3 bg-layer-5 text-layer-8 font-medium `} />
                    </div>
                </div>
            </div>
            <hr className='w-[89%] mx-auto bg-layer-3' />
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-sm text-center sm:text-left">© Copyrights 2023 - All Rights Reserved.
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <img src={facebook} alt="facebook" className='mr-4' />
                    <img src={instagram} alt="instagram" className='mr-4' />
                    <img src={x} alt="x" />
                </span>
            </div>
        </footer>
    )
}

export default Footer