
function About() {

    const aboutPic = require('./assets/about-me-pic.jpg');

    return ( 
        <>
            <section className="about-section section">
                <div className="page-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2 className='h2'>About Me</h2>
                            <p> </p>
                        </div>
                        <div className="section-content">
                            <div className="about-pic-wrap"> 
                                <img src={aboutPic} alt="menu-icon" className="home-pic" />
                                <div className="home-hero-subheader">
                                    <p>
                                        I am Juan Paolo Gallardo. I hold a Bachelor's Degree major in Computer Engineering Technology with Cum Laude. 
                                        I've had the opportunity to work on various project during my days in the university, from developing 
                                        standalone software, to developing web applications using different languages like PHP, HTML, CSS, Java and 
                                        SQL. I'm known for my problem-solving skills, willingness to learn new things, and to work collaboratively 
                                        with other people. In my free time, I'm studying other programming language like React and Javascript.
                                    </p>
                                </div>
                            </div>
                            <div className="home-hero-subheader">
                                <div className='topic-font-size'>
                                    <h1>Education</h1>
                                </div>
                                <ul>
                                    <li> 2020 - 2023 <br />  Bachelor of Engineering Technology - <br /> Major in Computer Engineering Technology <br /> 
                                    Technological University of the Philippines <br /> Cum Laude </li>
                                    <li> 2018 - 2019 <br /> Senior High School Diploma <br /> Del Pilar Academy <br /> Graduated with High Honors </li>
                                    <li> 2013 - 2017 <br /> Junior High School Diploma <br /> Del Pilar Academy <br /> Graduated with Honors </li>
                                </ul>
                                <div className='about-topic-font-size'>
                                    <h1>Skills</h1>
                                </div>
                                <ul>
                                    <li> Programming (Windows) </li>
                                    <li> Web Development </li>
                                    <li> Relational Database </li>
                                    <li> Machine Learning </li>
                                    <li> Problem Solving</li>
                                    <li> Cooperative </li>
                                    <li> Attentive</li>
                                    <li> Curious </li>
                                </ul>
                                <div className='about-topic-font-size'>
                                    <h1>Certificates</h1>
                                </div>
                                <ul>
                                    <li> January 2023 <br /> EVALUATION | QUEST: Quality Evaluation and <br /> Assurance in Software Testing <br/> 
                                    A webinar that discusses the procedure, requirements and the importance of Quality Assurance in Software Testing</li>
                                    <li> January 2023 <br /> WDYM: Web Dev, You Mean? Explore the World of Web Development <br/> 
                                    A webinar that discusses the introduction of programming languages used in developing
                                    and designing websites such as HTML, CSS and JavaScript.</li>
                                    <li> December 2022 <br /> Into the Future: Robotics Process Automation in the Modern World <br /> 
                                    A webinar that discusses the importance of Automation in Web Applications, the courses
                                    need, the programming languages need and the introduction and use of various extensions
                                    in automating a website</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default About;