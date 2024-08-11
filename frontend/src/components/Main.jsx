import About from './About';
import Contacts from './Contacts';
import Experience from './Experience';
import Passion from './Passion';
import Projects from './Projects';

function Main() {

    const homePic = require('./assets/home-pic.JPG');

    return ( 
        <>
            <main className="main">
                <header className="home-hero">
                    <div className="page-padding">
                        <div className="container">
                            <div className="home-hero-header">
                                <div className="home-hero-header-wrap">
                                    <h1 className="home-hero-heading">Hello, I'm Paolo!</h1>
                                    <h2>Software Developer</h2>
                                    <div className="home-hero-subheader">                                     
                                    <p className="text-color-sec"> 
                                    I'm a software developer with a passion for front end and back end development.  
                                    I aspire towards a career that will apply my knowledge in developing awesome 
                                    stuff through creating innovative software and applications. 
                                    </p>
                                </div>
                                </div>                                
                                <div>
                                    <img src={homePic} alt="menu-icon" className="home-pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <About />
                <Passion />
                <Experience />
                <Projects />
                <Contacts />
            </main>
        </>
     );
}

export default Main;