
function Experience() {

    const photoList = [
        {source: require('./assets/html-5.svg').default, alternative:"html-icon"},
        {source: require('./assets/css-3.svg').default, alternative:"css-icon"},
        {source: require('./assets/javascript.svg').default, alternative:"javascript-icon"},
        {source: require('./assets/java.svg').default, alternative:"java-icon"},
        {source: require('./assets/python.svg').default, alternative:"python-icon"},
        {source: require('./assets/sql-database.svg').default, alternative:"sql-icon"},
        {source: require('./assets/github.svg').default, alternative:"github-icon"},
        {source: require('./assets/react.svg').default, alternative:"react-icon"},
        {source: require('./assets/php.svg').default, alternative:"php-icon" , id: "php"},
    ]

    return ( 
        <>
            <section className="experience-section section">
                <div className="page-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2 className='h2'>Experience</h2>
                            <p> </p>
                        </div>
                        <div > {/*className="section-content"*/}
                            <div className='topic-font-size'>
                                <h1>CMS Management Intern</h1>
                            </div>
                                <h3>October 2022 - March 2023</h3>
                                <h3>Interns Hub - Truely.com</h3>
                            <div > {/* className="home-hero-subheader" */}
                                <ul>
                                    <li>Managed 200+ description and reviews of numerous products and services.</li>
                                    <li>Identified and managed the problems that the products and services faced.</li>
                                    <li>Add reviews, service features, highlighted features, and plans.</li>
                                </ul>
                            </div>
                            <div className='skills'>
                                <div className='section-header'>
                                    <h1>LANGUAGES/TECHNOLOGIES THAT I USED:</h1>
                                </div>
                                <div className="blocks">
                                    <div className='skills-row'>
                                        {photoList.map((item,index) => (
                                            <div className="skills-icon">
                                                <img src={item.source} alt={item.alternative} className="img-responsive" id={item.id}></img>
                                            </div>  
                                        ))}  
                                    </div>                        
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </section>
        </>
     );
}

export default Experience;