import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import Footer from '../pages/Footer';

function Contact() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubscribe = () => {
        const emailInput = document.querySelector('input[name="mail"]');
        const email = emailInput.value.trim();

        if (!email) {
            setErrorMessage('Enter Your Mail');
        } else if (!validateEmail(email)) {
            setErrorMessage('Enter a valid email address');
        } else {
            setErrorMessage(''); // Clear the error message
            setSuccessMessage('Thanks for filling out the form!');
            // You can also send the email to your server or perform any other necessary actions here.
        }
    };

    return (
        <div className="">
            <div id="contact">
                <div className="row pb-5 pt-5">
                    <div className="col col-lg-6 col-md-12 col-12 ps-5 pt-5 mt-5 mb-5">
                        <div className='content ms-5 mt-5 mb-5'>
                            <h5>SUBSCRIBE</h5>
                            <div className='text'>
                                <AiOutlineMail style={{ height: "80px", width: '80px' }} />
                                <h1 className='display-3 '>WEEKLY NEWS!</h1>
                            </div>
                            <p>Stay updated on the latest developments and special offers!</p>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-12 pt-5 mt-5 mb-5">
                        <div className='mt-5'>
                            {successMessage && <p className="text-success ps-2 pe-2 pt-2">{successMessage}</p>}
                            {errorMessage && <p className="text-danger ps-2 pe-2 pt-2">{errorMessage}</p>}
                        </div>
                        <div className='data mt-5 mb-5'>
                            <input type='email' placeholder='Your Mail' name='mail' className='ps-3 mt-5' style={{ color: 'white' }} /><br /><br />
                            <button className='ms-4 mt-5 ps-5 pe-5' onClick={handleSubscribe}>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
