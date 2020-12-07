import React from 'react';
import '../../App.css';
import Footer from '../Footer';


function Contact() {
    return (
        <div>
            <h1 className='contact'>CONTACT ME</h1>

            <section className="my-5">
             
                <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{ height: "400px" }}
                >
                    <iframe
                    src="https://maps.google.com/maps?q=lafayette%2C%20la&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="This is a unique title"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    
                    style={{ padding: 5, border: '1px solid black' }}
                    />
                </div>
                <br />
    
                </section>

            <Footer />
        </div>
    )
}

export default Contact