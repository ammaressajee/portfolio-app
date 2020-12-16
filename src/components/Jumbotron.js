import React from 'react';
import { MDBView, MDBMask, MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";
import Essajee from '../images/essajee.png';
import Stargazer from '../images/stargazer.png';
import Ammar from '../images/ammar.png';
import Crypto from '../images/cryptography.jpg';
import Graphics from '../images/graphics.jpg';
import Nethken from '../images/nethken.png';
import { Button2 } from './Button2';



const JumbotronPage = () => {
    return (
      <div>
      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                ESSAJEE.COM<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Essajee}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                Business website for Essajee Carimjee Insurance
              </p>
              <MDBCardText className='white-text'>
                ➢ Created, designed, and developed a business website De Novo for an international insurance
                brokerage firm - Essajee Carimjee Insurance Brokers (Pvt) Ltd. <br></br>
                ➢ Worked closely with clients to deliver a tailormade website which was customized to their
                satisfaction. <br></br>
                ➢ Some features that were implemented: Google Maps API, Lightbox, contact forms, and full
                scalability on all devices. The website can be viewed at: www.essajee.com
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">

              <Button2
                  color="info"
                  className="waves-effect"
                  link='/https://www.essajee.com'
                >
                  Visit Website? &nbsp; <MDBIcon far icon="file" />
                </Button2>

                {/* <Button2
                  color="success"
                  className="waves-effect"
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2> */}
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                STARGAZER<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Stargazer}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                A weather application/social platform for astronomy enthusiasts
              </p>
              <MDBCardText className='white-text'>
                ➢ Worked alongside a team of students as a front-end developer to create a full stack web application
                using Python Flask, Bootstrap, Jinja2, HTML, and CSS. <br></br>
                ➢ Stargazer was essentially a website for astronomy enthusiasts in the Ruston, LA area. <br></br>
                ➢ The website included features such as: weather information, objects of interest, and a social media
                platform with a functioning user management system.
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">

              <Button2
                  color="info"
                  className="waves-effect"
                  link="/http://untitled-stargazer.herokuapp.com/weather/day/1"
                >
                  Visit Website? &nbsp; <MDBIcon far icon="file" />
                </Button2>

                <Button2
                  color="success"
                  className="waves-effect"
                  link="/https://github.com/alexfaucheux/CSC-405---Main-Project"
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                AMMAR ESSAJEE PORTFOLIO<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Ammar}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                Website containing an extensive summary of my portfolio
              </p>
              <MDBCardText className='white-text'>
                ➢ Created and designed this website from scratch using a javascript framework. <br></br>
                ➢ Some of the technology used: React.js, React Router DOM, JSX, CSS, Bootstrap 4, Material Design Bootstrap (MDB). <br></br>
                ➢ Designed the website content based on my portfolio requirements and content. The website is fluid, responsive, and includes automatic scaling for multpile devices and screen sizes. 
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                
                <Button2
                  color="info"
                  className="waves-effect"
                  link="/"
                >
                  Visit Website? &nbsp; <MDBIcon far icon="file" />
                </Button2>

              {/*   <Button2
                  color="success"
                  className="waves-effect"
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2> */}
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
<MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                NETHKEN VIRTUAL TOUR<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Nethken}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                A virutal walking tour of 'Nethken Hall'
              </p>
              <MDBCardText className='white-text'>
                ➢ Using Autodesk Maya and Unreal Engine, we created an accurate model of 'Nethken Hall'. <br></br>
                ➢ Objects were modelled in Maya and imported into Unreal Engine. <br></br>
                ➢ Users are allowed to freely explore  and walk through all different hallways of the virtual 'Nethken Hall'!
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">

              

                <Button2
                  color="success"
                  className="waves-effect"
                  link='/https://github.com/martinthebrock/graphicsdesignproject'
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2>

              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                CRYPTOGRAPHIC CIPHERS<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Crypto}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                This project includes various ciphers used for cryptographic encryption and decryption
              </p>
              <MDBCardText className='white-text'>
                ➢ All cipher files are programmed using Python 2 and python 3. <br></br>
                ➢ Includes several ciphers such as: Binary Decoder, Vigenere Cyper, XOR Cipher, Steganography, and AES <br></br>
                ➢ Programs use standard i/o.
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <Button2
                  color="success"
                  className="waves-effect"
                  link='/https://github.com/ammaressajee/Applied-Cryptography'
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className='border border-dark' style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
            <MDBCardBody>
              <MDBCardTitle className="h2 white-text">
                OLD SCHOOL GRAPHICS SIMULATOR<br/><br/>
              </MDBCardTitle>
              <MDBCol md="6" className='m-auto'>
                <MDBView hover zoom waves>
                  <img
                    src={Graphics}
                    className="img-fluid mx-auto"
                    alt=""
                  /><br/>
                  <MDBMask className="flex-center">
                    <p className="white-text"></p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <p className="white-text my-4 font-weight-bold">
                This project includes programs that simulate shapes in the virtual world
              </p>
              <MDBCardText className='white-text'>
                ➢ Python 3 and Tkinter libraries were used to build a model that lets users manipulate shapes in virtual space. <br></br>
                ➢ Shapes are presented in virutal space and can be created, translated, transofrmed, and scaled. <br></br>
                ➢ Shading models have also been implemented, including gouraud shading.
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <Button2
                  color="success"
                  className="waves-effect"
                  link='/https://github.com/ammaressajee/Computer-Graphics'
                >
                  View code on GitHub? &nbsp; <MDBIcon far icon="file" />
                </Button2>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
    

    </div>
    )
  }
  
  export default JumbotronPage;