import React, { useState } from 'react'



const Hero = () => {
    // States
    const [menuToggle, setMenuToggle] = useState("false");

    // Handlers
    const handlerMenuToggle = () => {
        if (menuToggle === "false") {
            setMenuToggle("true")
        } else if (menuToggle === "true") {
            setMenuToggle("false")
        }
    }

    return (
        <>
            <button
                aria-controls='navbar'
                aria-expanded={menuToggle}
                className='navbar-mobile-toggle'
                onClick={() => handlerMenuToggle()}
            ></button>

            <nav>
                <ul id='navbar' className='navbar' aria-expanded={menuToggle}>
                    <li><a className='navbar-item'>Description</a></li>
                    <li><a className='navbar-item'>Projects</a></li>
                    <li><a className='navbar-item'>Experiences</a></li>
                    <li><a className='navbar-item'>Contact</a></li>
                </ul>
            </nav>

            <span className='hero-title'>WELCOME</span>

        </>
    )
}

export default Hero