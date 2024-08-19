import Form from './Form';
import Resume from './Resume';

function Contacts() {

    return ( 
        <>
            <section id="Contacts" className="contacts-section section">
                <div className="page-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2 className='h2'>Contacts</h2>
                        </div>
                        <div className="section-content exp-margin">
                            <div className="contact-layout">
                                <div className="form-layout">
                                    <Form />
                                </div>
                                <div className="resume-layout">
                                    <div className='resume-blur'>
                                        <Resume />
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

export default Contacts;