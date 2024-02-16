import React from 'react'

const Download = ({ icon, title, heading }) => {
    return (
        <button className='flex justify-center items-center bg-black px-6 py-2.5 rounded-md border-[1px] border-layer-8'>
            <img src={icon} alt="apple-icon" className='mr-4' />
            <div className='text-layer-8 leading-none text-left'>
                <p className='text-sm leading-none'>{title}</p>
                <p className='text-2xl font-semibold leading-none'>{heading}</p>
            </div>
        </button>
    )
}

export default Download