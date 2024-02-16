import React from 'react'
import { cart, shadow } from '../../assets'
import PrimaryButton from '../Buttons/PrimaryButton'

const Card = ({ styles, title, desc, image, imgStyle }) => {
    return (
        <div className={`w-[400px] rounded-3xl ${styles} px-[54px] text-center pb-6`}>
            <img src={image} alt="" className={`flex justify-center absolute top-12 mx-auto ${imgStyle}`} />
            <img src={shadow} alt="shadow" className='pt-4 mx-auto' />
            <h1 className='heading-3 pt-6'>{title}</h1>
            <p className='text-xl'>{desc}</p>
            <div className='flex items-center justify-between my-10'>
                <p>S&nbsp; M&nbsp; L&nbsp; XL</p>
                <h4 className='heading-4 m-0'>$ 49.65</h4>
            </div>
            <PrimaryButton title={`Add to Cart`} icon={cart} styles={`py-2.5 bg-layer-1 text-layer-2 font-medium`} />
        </div>
    )
}

export default Card