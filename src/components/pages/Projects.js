import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Jumbotron from '../Jumbotron';



function Projects() {
    return (
        <div style={{
            backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'
          }} >
            <h1 className='projects'>PROJECTS</h1>
            <Jumbotron />
            <Footer />
        </div>        
    )
}

export default Projects;
