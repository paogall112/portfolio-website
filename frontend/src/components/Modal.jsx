import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/carousel.css';

function Modal({isOpen, onClose, imageSrc, imageAlt, imageId}) {

    const sliderRef = useRef(null);
    
    useEffect(() => {

        if (isOpen) {
            document.body.classList.add('no-scroll');         
        } else {
            document.body.classList.remove('no-scroll');
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(0);
            }
        }

       
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);
    
    const projectListData = {
        0: [
            {source: require('./assets/projects/admin-homepage.png'), alternative:"admin-page"},
            {source: require('./assets/projects/admin-accounts1.png'), alternative:"admin-accounts-page"},
            {source: require('./assets/projects/admin-admins1.png'), alternative:"admin-listOfAdmins-page"},
            {source: require('./assets/projects/admin-brands1.png'), alternative:"admin-brands1-page"},
            {source: require('./assets/projects/admin-brands2.png'), alternative:"admin-brands2-page"},
            {source: require('./assets/projects/admin-category1.png'), alternative:"admin-category1-page"},
            {source: require('./assets/projects/admin-category2.png'), alternative:"admin-category2-page"},
            {source: require('./assets/projects/admin-contacts1.png'), alternative:"admin-contacts1-page"},
            {source: require('./assets/projects/admin-orders1.png'), alternative:"admin-orders-page"},
            {source: require('./assets/projects/admin-payments.png'), alternative:"admin-payments-page"},
            {source: require('./assets/projects/admin-products1.png'), alternative:"admin-products1-page"},
            {source: require('./assets/projects/admin-products2.png'), alternative:"admin-products2-page"},
            {source: require('./assets/projects/admin-terms1.png'), alternative:"admin-terms1-page"},
            {source: require('./assets/projects/admin-login.png'), alternative:"admin-login-page"},
        ],
        1: [
            {source: require('./assets/projects/po-lo-homepage1.png'), alternative:"po-lo-homepage1-page"},
            {source: require('./assets/projects/po-lo-homepage2.png'), alternative:"po-lo-homepage2-page"},
            {source: require('./assets/projects/po-lo-account1.png'), alternative:"po-lo-accounts1-page"},
            {source: require('./assets/projects/po-lo-account2.png'), alternative:"po-lo-account2-page"},
            {source: require('./assets/projects/po-lo-cart1.png'), alternative:"po-lo-cart1-page"},
            {source: require('./assets/projects/po-lo-cart2.png'), alternative:"po-lo-cart2-page"},
            {source: require('./assets/projects/po-lo-payment.png'), alternative:"po-lo-payment-page"},
            {source: require('./assets/projects/po-lo-shop1.png'), alternative:"po-lo-shop1-page"},
            {source: require('./assets/projects/po-lo-shop2.png'), alternative:"po-lo-shop2-page"},
            {source: require('./assets/projects/po-lo-signup1.png'), alternative:"po-lo-signup1-page"},
            {source: require('./assets/projects/po-lo-signup2.png'), alternative:"po-lo-signup2-page"},
            {source: require('./assets/projects/po-lo-store1.png'), alternative:"po-lo-store1-page"},
            {source: require('./assets/projects/po-lo-store2.png'), alternative:"po-lo-store2-page"},            
        ],
        2: [
            {source: require('./assets/projects/bmi1.png'), alternative:"body-mass-index1-page"},
            {source: require('./assets/projects/bmi2.png'), alternative:"body-mass-index2-page"},
            {source: require('./assets/projects/bmi3.png'), alternative:"body-mass-index3-page"},            
        ],        
        3: [
            {source: require('./assets/projects/invSys_Home.jpg'), alternative:"inventory-system-home-page", id:"invSys",},
            {source: require('./assets/projects/invSys_Add Product.jpg'), alternative:"inventory-system-add-product-page", id:"invSys",},
            {source: require('./assets/projects/invSys_Ingredients.jpg'), alternative:"inventory-system-ingredients-page", id:"invSys",},
            {source: require('./assets/projects/invSys_Orders.jpg'), alternative:"inventory-system-orders-page", id:"invSys",},
            {source: require('./assets/projects/invSys_History.jpg'), alternative:"inventory-system-history-page", id:"invSys",},
            {source: require('./assets/projects/invSys_HistoryProfit.jpg'), alternative:"inventory-system-history-profit-page", id:"invSys",},
            {source: require('./assets/projects/invSys_Statistics.jpg'), alternative:"inventory-system-statistics-page", id:"invSys",},     
            {source: require('./assets/projects/invSys_Help.jpg'), alternative:"inventory-system-help-page", id:"invSys",},
            {source: require('./assets/projects/invSys_Login Window.png'), alternative:"inventory-system-login-page", id:"login"},      
        ],        
    };

    const messageData = {
        0:[{title:'E-commerce Admin Page', message: 'During my 3rd year on college on the course Web App Programming, I developed an administration website of an E-commerce using PHP as backend, HTML, CSS, and JavaScript as Frontend, and phpMyAdmin as Database and XAMPP as server. It can process CRUD services in admin side like add new products, new people that can access this side, new categories of technology, and new rules or contacts. Many functionalities were added like the table on the home page and the subcategories.'},],
        1:[{title:'E-commerce Website', message: 'Alongside with the Admin Side of the E-commerce, here is the Po-Lo, or Potent-Loads. It is an E-commerce Website that I created using PHP as backend, HTML, CSS, and JavaScript as Frontend, and phpMyAdmin as Database and XAMPP as server. It can function as a typical e-commerce website in user side where it can put items into the cart, login, sign in, and other else. It was an interesting and fulfillment when developing the e-commerce especially the design part and the functionalities.'},],
        2:[{title:'Body Mass Index Prediction', message: 'During my 3rd year on college on the course Elective 1 which is Data Analytics. With our group, I served as the Backend Developer of our group in which I developed a website that measures the BMI of a person using the gender, height and the weight using Python as backend and HTML and CSS as Frontend, and Microsoft Excel to store the datasets. It predicts the Body Mass Index of a person by inputting the gender, height and weight of the user.'},],
        3:[{title:'Inventory System', message: 'During my 2nd year on college on the course Software Designs. With our group, I served as the Backend Developer, Frontend Developer and Programmer of our group in which I designed and developed a standalone inventory system using Java as Backend and Frontend, and MySQL as database. It stores the information of the products such as pastries and bread to the inventory system and it also stores the payment and orders for auditing.'},],
    };

    const messageList = messageData[imageId] || [];
    
    const projectListCarousel = projectListData[imageId] || [];

    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
    };

    return ( 
        <>
                <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
                    <div className="modal-layout">
                        <div className={`modal-content ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <span className="modal-close" onClick={onClose}>&times;</span> 
                                <br />
                            </div>
                            <div className="modal-body">
                                <Slider {...settings} ref={sliderRef}>
                                    {projectListCarousel.map((item,index) => (                            
                                        <div key={index}>
                                            <img src={item.source} alt={item.alternative} id={item.id} className="carousel-image"></img>   
                                        </div>  
                                    ))} 
                                </Slider>
                                <div className='modal-title'>
                                {messageList.map((msg, index) => (
                                        <h1>{msg.title}</h1>
                                    ))}
                                </div>                        
                                <div className="modal-message" >
                                    {messageList.map((msg, index) => (
                                        <p>{msg.message}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <br />
                            </div> 
                        </div>
                    </div>                    
                </div>        
        </>
     );
}

export default Modal;