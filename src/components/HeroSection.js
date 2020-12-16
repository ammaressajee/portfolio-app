import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className="hero-container" >
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>AMMAR ESSAJEE</h1>
            <p>Software Engineer</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link = '/resume'
                >
                    Resume &nbsp; <i className='far fa-file-alt'/>
                </Button>

                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/projects'
                >
                    Personal Projects &nbsp; <i className='fas fa-folder-open'/>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
