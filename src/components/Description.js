import React, { useState } from 'react'
// assets
import carRetro from '../assets/images/car-retro.jpg'
import carRetro2 from '../assets/images/car-retro-2.jpg'


const Description = () => {
    // States
    const [activeImg, setActiveImg] = useState(carRetro);
    const [inactiveImg, setInactiveImg] = useState(carRetro2);

    // Handlers
    const handleActiveImg = () => {
        const newActive = inactiveImg
        setInactiveImg(activeImg)
        setActiveImg(newActive)
    }


    return (
        <>
            <div className="set-description">
                <h1>About Me ...</h1>
                <p className="align-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nulla expedita nihil harum obcaecati pariatur totam vel neque sit? Est, amet aperiam. Quos autem labore, voluptate error eum similique cumque.
                </p>
            </div>
            <div className="set-pictures">
                <img src={activeImg} alt="car-retro"
                    className="pic-active"
                />
                <img src={inactiveImg} alt="car-retro-2"
                    className="pic-hidden"
                    onClick={() => handleActiveImg()}
                />
            </div>
        </>
    )
}

export default Description