import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Page1 from '../../images/page2.jpg';

function SignUp() {
    return (
        <div style={{
            // backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'
            backgroundImage: `url(${Page1})`,
          }}>
            <h1 className='sign-up'>Sign Up</h1>
            <Footer />
        </div>
    )
}

export default SignUp
