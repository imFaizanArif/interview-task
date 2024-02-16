import React from 'react'
import { auth, logo } from '../../assets'
import PrimaryButton from '../Buttons/PrimaryButton'

const Navbar = () => {
    return (
        <header className="body-font">
            <div className="container mx-auto flex flex-wrap p-5 px-36 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <img src={logo} alt="logo" />
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center text-layer-2">
                    <a className="mr-[60px] active:font-semibold hover:cursor-pointer">Home</a>
                    <a className="mr-[60px] active:font-semibold hover:cursor-pointer">About</a>
                    <a className="mr-[60px] active:font-semibold hover:cursor-pointer">How it Works</a>
                    <a className="mr-[60px] active:font-semibold hover:cursor-pointer">Shop</a>
                </nav>
                <PrimaryButton title='Login' icon={auth} styles={`py-2.5 bg-layer-1 text-layer-2 font-normal `} />
            </div>
        </header>
    )
}

export default Navbar