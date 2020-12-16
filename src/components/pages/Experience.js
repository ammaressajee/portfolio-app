import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardTitle, MDBCardImage, MDBCardText } from "mdbreact";
import {Button2} from '../Button2.js'
import '../pages/Experience.css';
import Pic1 from '../../images/dawg.jpg';
import Pic2 from '../../images/web.jpg';
import Pic3 from '../../images/car.jpg';
import Pic4 from '../../images/stocks.jpg';
import Pic5 from '../../images/virtusa.jpg';
import Page1 from '../../images/page2.jpg'



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
        }}
    />
);

function Experience() {
    return (
        <div >
            <h1 className='experience'>EXPERIENCE</h1>

            <section className="my-5">
                <h2 className="work-header h1-responsive font-weight-bold text-center my-5">
                Education:
                </h2>
                <ColoredLine></ColoredLine>
                <br></br>
                <p className="lead w-responsive text-center mx-auto mb-5">
                Attended Louisiana Tech University (2015 - 2020) with a Bachelors degree in Computer Science and a concentration in Cyber Security. 
                </p>

                <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img
                    className="img-fluid photo"
                    src={Pic1}
                    alt=""
                    />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3 education-panel">
                    <MDBCol size="1">
                        <MDBIcon icon="share" size="lg" className="indigo-text" />
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Coursework</h5>
                        <p className="grey-text">
                        At Louisiana Tech, I was able to undertake a variety of classes that spanned the field of computer science. Some of the courses I participated in were Game Design, Computer Graphics,
                        Reseverse Engineering, Applied Cryptography and more! Aside from my classes, I have become well versed in dealing with multiple programming
                        languages in order to get job-specific tasks completed accurately and efficiently.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3 education-panel">
                    <MDBCol size="1">
                        <MDBIcon icon="share" size="lg" className="indigo-text" />
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Concentration</h5>
                        <p className="grey-text">
                        A concentration in Cyber Secuirty required me to take various courses relating to Cyber Secuirty. Encryption/Decryption, computer networks, cyber attack and defense
                        methods were some of the areas I explored.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3 education-panel">
                    <MDBCol size="1">
                        <MDBIcon icon="share" size="lg" className="indigo-text" />
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Clubs and Organizations</h5>
                        <p className="grey-text">
                        I was involved with a couple of on campus organizations. As a member of the Zeta Chi Fraternity I held executive positions and participated in philanthropic events. 
                        I was also a member of the National Society of Leadership and Success (NSLS) Honor Society at Lousiana Tech. 
                        </p>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3 education-panel">
                    <MDBCol size="1">
                        <MDBIcon icon="share" size="lg" className="indigo-text" />
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                        <h5 className="font-weight-bold mb-3">Events and Competitions</h5>
                        <p className="grey-text">
                        An active competitor in the Louisina Tech Intramural events! Participated in LA Tech's annual Hack-a-thon (CyberStorm) and 
                        competed in the yearly 'Game Jam' event.
                        </p>
                    </MDBCol>
                    </MDBRow>
                    
                </MDBCol>
                </MDBRow>
            </section>

           
            <div  style={{
            backgroundImage: `url(${Page1})`,
        
          }}>

            <h1 className="work-header2"> Professional Experience:</h1>


            <MDBContainer className="work-cards">
                <MDBCarousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                    <MDBCard>
                        <MDBCardImage src={Pic2} alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h1">Freelance Web Developer</MDBCardTitle> 
                        <ColoredLine></ColoredLine><br></br>
                        <MDBCardTitle tag="h2">Essajee Carimjee Insurance</MDBCardTitle>
                        <MDBCardTitle tag="h3">June, 2020</MDBCardTitle><br></br>
                        <MDBCardText>
                        ➢ Created, designed, and developed a business website De Novo for an international insurance
                        brokerage firm - Essajee Carimjee Insurance Brokers (Pvt) Ltd. <br></br>
                        ➢ Worked closely with clients to deliver a tailormade website which was customized to their
                        satisfaction.<br></br>
                        ➢ Some features that were implemented: Google Maps API, Lightbox, contact forms, and full
                        scalability on all devices.
                        </MDBCardText>
                        <div  className='move-button'>
                        <Button2 
                        className='btns' 
                        buttonStyle='btn--primary' 
                        link='/https://www.essajee.com'>Visit Essajee.com?</Button2>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                    <MDBCard>
                        <MDBCardImage src={Pic5} alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h1">Software Architect (Summer Intern)</MDBCardTitle>
                        <ColoredLine></ColoredLine><br></br>
                        <MDBCardTitle tag="h2">Virtusa</MDBCardTitle>
                        <MDBCardTitle tag="h3">July, 2018</MDBCardTitle><br></br>
                        <MDBCardText>
                        ➢ Assigned the role of a software architect and a business analyst. <br></br>
                        ➢ Responsible for organizing a charity event (raised approx. $2000) and developing a
                        technological model that promotes non-linear revenue growth within the company.<br></br>
                        ➢ The completed model was presented to the Virtusa board of directors and leaders of various
                        companies (75+ members).<br></br>
                        ➢ Virtusa/Unilever Summer Internship Program (Virtusa HQ located in Southborough, MA).
                        </MDBCardText>
                        <div  className='move-button'>
                        <Button2 
                        className='btns' 
                        buttonStyle='btn--primary' 
                        link='/http://www.ft.lk/hr/Virtusa-and-Unilever-inspire-5th-batch-of-summerinterns/47-662040
                        '>View News Article?</Button2>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                    <MDBCard>
                        <MDBCardImage src={Pic3} alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h1">Summer Internship</MDBCardTitle>
                        <ColoredLine></ColoredLine><br></br>
                        <MDBCardTitle tag="h2">Senok Audi</MDBCardTitle>
                        <MDBCardTitle tag="h3">June, 2017</MDBCardTitle><br></br>
                        <MDBCardText className="work-text">
                        ➢ Some responsibilities during this internship were: presenting cars to customers, going on test
                        drives, attend meetings with potential clients, and delivering new cars to and from the
                        workshop.<br></br>
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                    <MDBCard>
                        <MDBCardImage src={Pic4} alt="MDBCard image cap" top hover
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h1">Summer Internship</MDBCardTitle>
                        <ColoredLine></ColoredLine><br></br>
                        <MDBCardTitle tag="h2">John Keells Stock Brokers</MDBCardTitle>
                        <MDBCardTitle tag="h3">July, 2016</MDBCardTitle><br></br>
                        <MDBCardText className="work-text">
                        ➢ Shadowed stockbrokers as they bought and sold stocks. <br></br>
                        ➢ Worked in trading, sales, and research departments. <br></br>
                        ➢ Created a business model that was intended to predict annual the revenue flow of a hotel.
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
                </MDBContainer>


               </div>

            <Footer />
        </div>
    )
}

export default Experience
