import { useState } from "react";
import Modal from "./Modal";

function Projects() {

    const projectList = [
        {source: require('./assets/projects/admin-homepage.png'), alternative:"admin-page"},
        {source: require('./assets/projects/po-lo-homepage1.png'), alternative:"po-lo-e-commerce-page"},
        {source: require('./assets/projects/bmi1.png'), alternative:"body-mass-index-page"},
        {source: require('./assets/projects/invSys_Home.jpg'), alternative:"inventory-system-page"},
    ]

    const titleData = {
        0:[{title:'E-commerce Admin Page'},],
        1:[{title:'E-commerce Website'},],
        2:[{title:'Body Mass Index Prediction'},],
        3:[{title:'Inventory System'},],
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [currentAlt, setCurrentAlt] = useState('');

    const openModal = (imageSrc, imageAlt, imageId) => {
        setCurrentImage(imageSrc);
        setCurrentAlt(imageAlt);
        setCurrentId(imageId);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);      
    }

    return ( 
        <>
            <section id="Projects" className="projects-section section">
                <div className="page-padding">
                    <div className="projects-container">
                        <div className="section-header">
                            <h2 className='h2'>Projects</h2>
                        </div>
                        <div className="flex-wrap projects-margin">
                            {projectList.map((item,index) => (
                                <div className="image-container">   
                                    <img src={item.source} alt={item.alternative} className="project-img-responsive" id={item.id} onClick={() => openModal(item.source, item.alternative, index)}></img>
                                    <div className="image-title">
                                        <h1>{titleData[index]?.[0]?.title || 'No Title'}</h1>
                                    </div>
                                </div>
                            ))}
                            <Modal isOpen={isModalOpen} 
                                   onClose={closeModal} 
                                   imageSrc={currentImage}
                                   imageAlt={currentAlt}
                                   imageId={currentId}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Projects;