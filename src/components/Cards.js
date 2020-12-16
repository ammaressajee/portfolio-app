import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

import Pic1 from '../images/essajee.png';
import Pic2 from '../images/cryptography.jpg';
import Pic3 from '../images/instagram.png';
import Pic4 from '../images/stargazer.png';
import Pic5 from '../images/linkedin.png';
import Pic6 from '../images/facebook.png';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out some of my work!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        
                        
                        <CardItem 
                        src={Pic1}
                        text="Take a look at 'Essajee.com' designed and developed by me!"
                        label="Essajee.com"
                        path='/https://essajee.com'
                        />

                        <CardItem 
                        src={Pic4}
                        text="Explore Stargazer: the weather app for astronomy enthusiasts!"
                        label="Stargazer"
                        path='/http://untitled-stargazer.herokuapp.com/weather/day/1'
                        />                     
                        
                        <CardItem 
                        src={Pic2}
                        text="Visit my GitHub repository of crygraphic ciphers?"
                        label="Ciphers"
                        path='/https://github.com/ammaressajee/Applied-Cryptography'
                        />

                    </ul>

                    <ul className="cards__items">
                        
                        <CardItem 
                        src={Pic5}
                        text="Visit LinkedIn and take a look at my profile?"
                        label="LinkedIn"
                        path='/https://www.linkedin.com/in/ammar-essajee-3242291a2'
                        />

                        <CardItem 
                        src={Pic3}
                        text="Visit Instagram and take a look at my profile?"
                        label="Instagram"
                        path='/https://www.instagram.com/ammaressajee/'
                        />

                        
                        <CardItem 
                        src={Pic6}
                        text="Visit Facebook and take a look at my profile?"
                        label="Facebook"
                        path='/https://www.facebook.com/ammar.essajee'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
