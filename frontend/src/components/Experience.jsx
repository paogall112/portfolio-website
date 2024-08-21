
function Experience() {

    const photoList = [
        {source: require('./assets/icons/html-5.svg').default, alternative:"html-icon"},
        {source: require('./assets/icons/css-3.svg').default, alternative:"css-icon"},
        {source: require('./assets/icons/javascript.svg').default, alternative:"javascript-icon"},
        {source: require('./assets/icons/java.svg').default, alternative:"java-icon"},
        {source: require('./assets/icons/python.svg').default, alternative:"python-icon"},
        {source: require('./assets/icons/sql-database.svg').default, alternative:"sql-icon"},
        {source: require('./assets/icons/github.svg').default, alternative:"github-icon"},
        {source: require('./assets/icons/react.svg').default, alternative:"react-icon"},
        {source: require('./assets/icons/php.svg').default, alternative:"php-icon"},
    ]

    return ( 
        <>
            <section id="Experience" className="experience-section section">
                <div className="page-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2 className='h2'>Experience</h2>
                            <p> </p>
                        </div>
                        <div className='section-content flex exp-flex-layout exp-margin'>
                            <div className='experience-work'>
                                <div className='experience-work-layout'>
                                    <div className='experience-work-font-size'>
                                        <h1>CMS Management Intern</h1>
                                        <h3>October 2022 - March 2023</h3>
                                        <h3>Interns Hub - Truely.com</h3>
                                        <ul>
                                            <li>Managed 200+ description and reviews of numerous products and services.</li>
                                            <li>Identified and managed the problems that the products and services faced.</li>
                                            <li>Add reviews, service features, highlighted features, and plans.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='skills-section'>
                                <div className='section-header'>
                                    <h1>LANGUAGES / TECHNOLOGIES THAT I USED:</h1>
                                </div>
                                <div className='section-content flex icon-wrap exp-column-gap exp-margin'>
                                    {photoList.map((item,index) => (
                                        <div className="skills-icon">
                                            <img src={item.source} alt={item.alternative} className="exp-img-responsive" id={index}></img>
                                        </div>  
                                    ))}  
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