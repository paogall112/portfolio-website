import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  // const sample = (process.env.RESEND_API_KEY);
          // process.env.REACT_APP_RESEND_TEMPLATE_ID,  
          // process.env.REACT_APP_RESEND_API_KEY
  // console.log("API ID",process.env.REACT_APP_RESEND_API_ID)

  const mailIcon = require('./assets/icons/mail.svg').default;
  const twitterIcon = require('./assets/icons/twitter.svg').default;

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.message) {
  } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_RESEND_API_ID,
          process.env.REACT_APP_RESEND_TEMPLATE_ID, 
          form.current, {
          publicKey: process.env.REACT_APP_RESEND_API_KEY,
        })
        .then(
          () => {            
            alert('Form submitted successfully!');
          },
          (error) => {
            console.log('Failed...',error.text)
          },
        );
  };

    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = 'Name is required';
    if (!formData.user_email) newErrors.user_email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process the form data (e.g., send it to an API)
    console.log('Form data submitted:', formData);

    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });

    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: '',
    })
  };

  return (
    <>
      <div className="form-message">
        <p>
            I encourage everyone to reach out to me whether 
            it is regarding to programming, inquiries, hobbies, 
            games or just saying "Hello!" Drop me a message and 
            I'll get back to you immediately!
        </p>
        <div className='contact-layout'>
            <a href="mailto:j.paogallardo@gmail.com" className='email-layout'>
                <img src={mailIcon} alt='mail-icon' className="nav-burger-icon"></img>
                <span>j.paogallardo@gmail.com</span>
            </a>
            <a href="https://x.com/jpaogallardo" className='email-layout'>
                <img src={twitterIcon} alt='mail-icon' className="nav-burger-icon"></img>
                <span>Twitter</span>
            </a>
        </div>
        <h1>Write me a message 📩 ⬇</h1>
          <form ref={form} onSubmit={handleSubmit}>          
            <div className='flex email-field-layout'>
              <label htmlFor="name">Name:</label>        
              {errors.user_name && <p style={{ color: 'red', margin: 0 }}>{errors.user_name}</p>}
            </div>
            <div className='email-textfield'>
              <input
                className="textfield"
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='flex email-field-layout'>
              <label htmlFor="email">Email:</label>
              {errors.user_email && <p style={{ color: 'red', margin: 0 }}>{errors.user_email}</p>}
            </div>
            <div className='email-textfield'>            
              <input
                className="textfield"
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </div>            

            <div>
              <div className='flex email-field-layout'>
                <label htmlFor="message">Message:</label>
                {errors.message && <p style={{ color: 'red', margin: 0  }}>{errors.message}</p>}
              </div>
              <div className="email-textfield">
                <textarea
                  className="textfield textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <input type="submit" className='submit-button' value="Send"></input>
          </form>
      </div>      
    </>
  );
}

export default Form;
