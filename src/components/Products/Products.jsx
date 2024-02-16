import React from 'react'
import Card from './Card'
import { product1, product2, product3 } from '../../assets'

const Products = ({ firstTitle, firstOutlineTitle, middleTitle, lastTitle, lastOutlineTitle, styles }) => {
    return (
        <section>
            <div className="container mx-auto flex py-32 md:flex-row flex-col items-center justify-center text-center">
                <div>
                    <h1 className='heading-2 text-layer-4'>
                        {firstTitle} <span className='text-stroke-invert'>{firstOutlineTitle}</span> {middleTitle} {lastTitle} <span className='text-stroke-invert bg-wordCover2 bg-no-repeat bg-center bg-cover'> {lastOutlineTitle} </span>
                    </h1>
                    <div className='grid grid-cols-3 gap-x-12 relative pt-[280px]'>
                        <Card title={`Fitness Shot`} desc={`Lorem ipsum dolor sit amet consectetur. At et diam semper.`} image={product1} />
                        <Card title={`Gym Shot`} desc={`Lorem ipsum dolor sit amet consectetur. At et diam semper.`} image={product2} styles={`bg-layer-5 text-white`} />
                        <Card title={`Sport Shot`} desc={`Lorem ipsum dolor sit amet consectetur. At et diam semper.`} image={product3} imgStyle={`ml-16`} />
                    </div>
                    <div className={`${styles} text-4xl font-bold pt-24 mb-0`}>See all</div>
                </div>
            </div>
        </section>
    )
}

export default Products