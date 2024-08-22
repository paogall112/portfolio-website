import React, { useEffect, useState } from 'react';

import About from './About';
import Contacts from './Contacts';
import Experience from './Experience';
import Projects from './Projects';

function Main() {
    const [titleVisible, setTitleVisible] = useState(false);
    const [ImgVisible, setImgVisible] = useState(false);
    const [glassesVisible, setGlassesVisible] = useState(false);
    const [laptopVisible, setLaptopVisible] = useState(false);
    const [serverVisible, setServerVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleVisible(true);
        }, 500);

        const toggleGlasses = () => {
            setTimeout(() => {
                setGlassesVisible(true);
            }, 800);
            setTimeout(() => {                                
                setLaptopVisible(true);
            }, 1500);
            setTimeout(() => {                                
                setServerVisible(true);
            }, 2000);

            setTimeout(() => {
                setGlassesVisible(false); 
            }, 3000);
            setTimeout(() => {                              
                setLaptopVisible(false);
            },4000);
            setTimeout(() => {            
                setServerVisible(false);
            },4300);
        };

        toggleGlasses();

        const intervalId = setInterval(toggleGlasses,6000);

        return () => clearInterval(intervalId);

    }, []);

    const homePic = require('./assets/home-pic.JPG');
    const glasses = require('./assets/eyeglasses.svg').default;
    const laptop = require('./assets/laptop-computer.svg').default;
    const server = require('./assets/server.svg').default;

    return ( 
        <>
            <section className="home-hero">
                <div className="page-padding">
                    <div className="container">
                        <div className="home-hero-header">
                            <div className="home-hero-header-wrap">
                                <h1 className={`home-hero-heading text ${titleVisible ? "visible" : ""}`}>Hello, I'm <span className='home-hero-heading-masked-text'>Paolo!</span></h1>
                                <h2 className={`home-hero-title text ${titleVisible ? "visible" : ""}`}>Software Developer</h2>
                                <div className={`home-hero-subheader text ${titleVisible ? "visible" : ""}`}>                                     
                                    <p className="home-hero-subheader-message"> 
                                    I'm a software developer with a passion for front end and back end development.  
                                    I aspire towards a career that will apply my knowledge in developing awesome 
                                    stuff through creating innovative software and applications. 
                                    </p>
                                </div>
                            </div>                                
                            <div className="home-pic-wrap">
                                <img src={homePic} alt="menu-icon" className="home-pic" />
                                <img src = {glasses} alt = 'glasses' className={`home-pic-glasses ${glassesVisible ? "visible" : ""}`} />
                                <img src = {laptop} alt = 'glasses' className={`home-pic-laptop ${laptopVisible ? "visible" : ""}`} />
                                <img src = {server} alt = 'glasses' className={`home-pic-server ${serverVisible ? "visible" : ""}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Experience />
            <Projects />
            <Contacts />
        </>
     );
}

export default Main;