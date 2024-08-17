import { useState } from 'react';

function BurgerMenu({menuList}) {

    const burgerMenu = require('./assets/icons/hamburger-menu-white.svg').default;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <>
            <div onClick={toggleMenu}>
                <img src={burgerMenu} alt="menu-icon" className="nav-burger-icon" />
                <div className={`nav-burger-menu ${isOpen ? 'show' : ''}`}>
                    {menuList.map((item,index) => (
                        <a href={item.link} className="nav-link">{item.name}</a> 
                    ))}
                </div>
            </div>
            
            
        </>        
     );
}

export default BurgerMenu