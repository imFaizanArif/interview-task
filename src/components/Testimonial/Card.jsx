import React from 'react'
import { avatar } from '../../assets'

const Card = ({ desc }) => {
    return (
        <div className='w-[400px] rounded-xl bg-white p-5 shadow-md'>
            <p className='text-base mb-4'>{desc}</p>
            <div className='flex items-center'>
                <img src={avatar} alt="avatar" />
                <h4 className='text-xl font-semibold ml-4'>John Doe</h4>
            </div>
        </div>
    )
}

export default Card