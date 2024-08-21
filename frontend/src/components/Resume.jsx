import Pdf from '../components/assets/resume2024.pdf';

function Resume() {
    return ( 
        <>
            <div className="resume-message">
                <h1>
                    Grab a copy of my Résumé!                                            
                </h1>
                <br />
                <div>
                    <a href={Pdf} className='resume-button' target="_blank" rel="noopener noreferrer">View my Résumé</a>
                </div>
            </div>
        </>
     );
}

export default Resume;