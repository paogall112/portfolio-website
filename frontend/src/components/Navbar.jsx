
// import {ReactComponent as YourSvg} from './assets/hamburger-menu3.svg';
import React, { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";

function Navbar() {

    const [navIcon,setNavIcon] = useState(require('./assets/favicon.ico'));

    const handleResize = () => {
        if(window.innerWidth <= 768) {
            setNavIcon(require('./assets/icon.ico'));
        } else {
            setNavIcon(require('./assets/favicon.ico'));
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const menuList = [
        {link: "#About", name:"About"},
        {link: "#Experience", name:'Experience'},
        {link: "#Projects", name:'Projects'},
        {link: "#Contacts", name:'Contacts'}
    ]

    return ( 
        <>
            <div className="nav">
                <div className="page-padding">
                    <div className="container">
                        <div className="nav-inner">
                            <div className="nav-logo-layout"> 
                                <img src={navIcon} alt="paolo-icon" className="nav-logo-icon" onClick={scrollToTop}></img>
                                <div className="nav-logo" onClick={scrollToTop}>Juan Paolo Gallardo</div>
                            </div>                            
                            <div className="nav-toggle">
                                <BurgerMenu menuList = {menuList}/>
                            </div>    
                            <div className="nav-menu">
                                {menuList.map((item,index) => (
                                    <a href={item.link} className="nav-link">{item.name}</a>  
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
     );
}

export default Navbar;