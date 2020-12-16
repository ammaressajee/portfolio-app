import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Pdf from '../PDF/Resume_2020_Ammar.pdf';
import resume from '../../images/resume.jpg';
import '../pages/Resume.css';
import '../../App.css';
import Bg1 from '../../images/page2.jpg'



function Resume() {
    return (
        <div style={{
            backgroundImage: `url(${Bg1})`,
           
          }} >
              <section className='resume-pad'></section>
              <section className='resume-wrapper'>Ammar Essajee: Resume (2020)</section>
            <img className='resume' src={resume} alt='resume-file'/>  <a className='resume-btn' href = {Pdf} >Open PDF</a>
            
            <Footer />
        </div>
        
    )
}

export default Resume
