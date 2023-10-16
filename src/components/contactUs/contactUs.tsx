// ContactForm.tsx
import React, { useState } from 'react';
import './contactus.css';

import group7334 from '../../assets/Group 7334.png';
import group7335 from '../../assets/Group 7335.png';
import group7340 from '../../assets/Group 7340.svg';
import vector from '../../assets/Vector.png';
import icroundemail from '../../assets/ic_round-email.png';
import basilinsta from '../../assets/basil_instagram-solid.png';



const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., sending data to a server)
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
    <div className="formSec" id='section6'>

    <div className="formWrapper">
        <img className='imgFormWrap' src={group7340} alt="" />
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          placeholder='Full Name'
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={9}
          required
        />
      </div>
      <button className='contact-button' type="submit">Send Message</button>
    </form>
    </div>
    <div className="innerSecFormRt">
      <div className="inInnerSecTxt">

        <h1>GET IN TOUCH</h1>
        <div className="cellForm1">
            <img src={vector} alt="" />
            <p>1412 Broadway 21st Floor, New York, NY 10018</p>
        </div>
        <div className="cellForm2">
            <img src={icroundemail} alt="" />
            <p>@emprixmarketing.com</p>
        </div>
        <div className="cellForm3">
            <img src={basilinsta} alt="" />
            <p>Info@emprixmarketing</p>
        </div>
      </div>
        <img className='imgFotseter' src={group7335} alt="" />
    </div>
    </div>
    </>
  );
};

export default ContactForm;
