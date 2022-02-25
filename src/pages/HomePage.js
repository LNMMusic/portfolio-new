import React from 'react'
// Components
import Hero from '../components/Hero'
import Description from '../components/Description'


const HomePage = () => {
  
  
    return (
        <>
            <div className="section-hero">
                <Hero />
            </div>

            <div className="section-flex section-description">
                <Description />
            </div>

            <div className="section-flex section-projects">

            </div>

            <div className="section-flex section-experiences">

            </div>

            <div className="section-flex section-contact">

            </div>
        </>
    )
}

export default HomePage