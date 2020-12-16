import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals    
                </p>    
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder="Your Email"
                        className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>  */}
            <h3 style={{ color: 'white' }}>Thank you for visiting!</h3>
            <section className='socail-media'>
                <div className='socail-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            ESSAJEE &nbsp;<i className='fab fa-asymmetrik' />
                        </Link>
                    </div>
                    
                    <div className='social-icons'>
                        
                        <Link className='social-icon-link facebook' 
                        to='/https://www.facebook.com/ammar.essajee'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>

                        <Link className='social-icon-link instagram' 
                        to='/https://www.instagram.com/ammaressajee/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>

                        <Link className='social-icon-link twitter' 
                        to='/https://twitter.com/ammar_essajee'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>

                        <Link className='social-icon-link linkedin' 
                        to='/https://www.linkedin.com/in/ammar-essajee-3242291a2'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>

                    </div>
                    <small className='website-rights'>Essajee 2020 ™</small>
                </div>
            </section>

        </div>
    )
}

export default Footer
