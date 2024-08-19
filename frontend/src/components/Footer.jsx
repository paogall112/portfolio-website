function Footer() {

    const footerIcon = [
        {source: require('./assets/icons/facebook.svg').default, alternative:"facebook-icon", href: "https://www.facebook.com/jpaogallardo"},
        {source: require('./assets/icons/X.svg').default, alternative:"X-icon", href: "https://x.com/jpaogallardo"},
        {source: require('./assets/icons/github.svg').default, alternative:"github-icon", href: "https://github.com/paogall112"},
        {source: require('./assets/icons/linkedin.svg').default, alternative:"linkedin-icon", href: "https://www.linkedin.com/in/juan-paolo-g-6587ab201/"},
    ]

    return ( 
        <>
            <footer>
                <div className='footer-blur'>
                <div className="page-padding">
                    <div className="container">
                        <div className="flex footer-content">
                            <div className="flex footer-space">                                
                                <p>Created using HTML, CSS, and ReactJs</p>
                            </div>
                            <div className="flex footer-icons">
                                {footerIcon.map((item,index) => (
                                    <div key={index}>  
                                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                                            <img src={item.source} alt={item.alternative} className="footer-icon-size" id={index}></img>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="footer-credits">
                                <div className='footer-credits-layout'>
                                    <p>&copy; {new Date().getFullYear()} Juan Paolo Gallardo. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;