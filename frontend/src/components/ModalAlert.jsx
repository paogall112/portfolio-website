import React, { useEffect } from 'react';
import './styles/modalAlert.css'

function ModalAlert({isOpen, onClose}) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');         
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return ( 
        <>
            <div className={`modal-alert-overlay ${isOpen ? 'show' : ''}`}>
                <div className={`modal-alert-content ${isOpen ? 'show' : ''}`}>
                    <div className='modal-alert-header'>
                        <h1>Thank you!</h1>
                    </div>
                    <div className='modal-alert-body'>                    
                        <h3>Message Sent</h3>
                        <p>Your message has been successfully sent!</p>
                    </div>
                    <div className='modal-alert-footer'>                        
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ModalAlert;