import React from 'react'
import Card from './Card'

const Testimonial = () => {
    return (
        <section className='bg-layer-9 text-layer-2'>
            <div className=" mx-auto py-24">
                <h1 className='heading-2 mx-auto py-6 text-center'>Testimonials</h1>
                <div className='flex justify-evenly w-full'>
                    <Card desc={`Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.`} />
                    <Card desc={`Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.`} />
                    <Card desc={`Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.`} />
                    <Card desc={`Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.`} />

                </div>
            </div>
        </section>
    )
}

export default Testimonial