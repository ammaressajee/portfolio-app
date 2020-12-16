import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Jumbotron from '../Jumbotron';
import Page1 from '../../images/page2.jpg'


function Projects() {
    return (
        <div style={{
            // backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'
            backgroundImage: `url(${Page1})`,
          }} >
            <h1 className='projects'>PROJECTS</h1>
            <Jumbotron />
            <Footer />
        </div>        
    )
}

export default Projects;
