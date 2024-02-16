import React from 'react'

const BannerImage = ({ img }) => {
    return (
        <div className={`flex items-center justify-end w-[75px] h-[40px] bg-center bg-no-repeat`}
            style={{
                backgroundImage: `url(${img})`,
            }} />
    )
}

export default BannerImage