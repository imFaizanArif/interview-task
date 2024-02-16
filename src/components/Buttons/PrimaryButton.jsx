import React from 'react'

const PrimaryButton = ({ title, icon, styles }) => {
    return (
        <button className={`inline-flex items-center px-7 ${styles} rounded-full text-lg shadow-inner shadow-layer-3`} >
            <img src={icon} alt="auth" className={`mr-4`} />
            <span>{title}</span>
        </button>
    )
}

export default PrimaryButton