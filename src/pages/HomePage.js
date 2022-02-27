import React from 'react'
// Components
import Hero from '../components/Hero'
import Description from '../components/Description'
import Projects from '../components/Projects'


const HomePage = () => {
  
  
    return (
        <>
            <div className="section-hero">
                <Hero />
            </div>

            <div className="section-grid section-description">
                <Description />
            </div>

            <div className="section-flex section-projects">
                <Projects />
            </div>

            <div className="section-flex section-experiences">

            </div>

            <div className="section-flex section-contact">

            </div>
        </>
    )
}

export default HomePage