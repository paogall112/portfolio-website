
// import {ReactComponent as YourSvg} from './assets/hamburger-menu3.svg';
import BurgerMenu from "./BurgerMenu";

function Navbar() {

    const menuList = [
        {link: "#About", name:"About"},
        {link: "#Passion", name:'Passion'},
        {link: "#Experience", name:'Experience'},
        {link: "#Projects", name:'Projects'},
        {link: "#Contacts", name:'Contacts'}
    ]

    return ( 
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="nav">
                <div className="page-padding">
                    <div className="container">
                        <div className="nav-inner">
                            <a href="/" className="nav-logo">
                                <div>Juan Paolo Gallardo</div>
                            </a>
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