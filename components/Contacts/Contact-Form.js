import Image from "next/image";

import img from "../../public/images/about/contact.jpg";

import { useState } from 'react';

const ContactForm = ({ gap }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    instituteName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={`rbt-contact-address ${gap}`}>
      {/* Your HTML content for the contact form */}
	  <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <Image
                  className="w-100 radius-6"
                  src={img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h3 className="title">
                  Request a Callback
                </h3>
      <form className="rainbow-dynamic-form max-width-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            name="name" 
            id="contact-name" 
            type="text" 
            value={formData.name} 
            onChange={handleChange}
          />
          <label>Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="form-group">
          <input 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange}
          />
          <label>Email</label>
          <span className="focus-border"></span>
        </div>
        <div className="form-group">
          <input 
            name="phoneNumber" 
            type="text" 
            value={formData.phoneNumber} 
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <span className="focus-border"></span>
        </div>
        <div className="form-group">
          <input 
            name="instituteName" 
            type="text" 
            value={formData.instituteName} 
            onChange={handleChange}
          />
          <label>Institute Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="form-submit-group">
          <button
            name="submit"
            type="submit"
            id="submit"
            className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">Request Callback</span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
              <span className="btn-icon">
                <i className="feather-arrow-right"></i>
              </span>
            </span>
          </button>
        </div>
      </form>
	  </div>
	  </div>
	  </div>
	  </div>
    </div>
  );
};

export default ContactForm;
