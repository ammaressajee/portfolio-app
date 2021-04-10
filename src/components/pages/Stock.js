import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Page1 from '../../images/page2.jpg';
import Datatable from '../Datatable';

function Projects() {
    return (
        <div style={{
            backgroundImage: `url(${Page1})`,
          }} >
            <h1 className='stock display-1'>Stock Price Calculator</h1>
            <br></br>
            <section style={{margin: 25}}>
                <Datatable></Datatable>
            </section>
            
            <br></br>
            <Footer />
        </div>        
    )
}

export default Projects;

