import Link from "next/link";
import { useState } from 'react';
const ClassicLms = () => {
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
      const response = await fetch('/api/submitForm', {
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
    <>
      <div className="rbt-banner-area rbt-banner-1 variation-2 height-750">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8">
              <div className="content">
                <div className="inner">
                  <div className="rbt-new-badge rbt-new-badge-one">
                    <span className="rbt-new-badge-icon">🏆</span> The Leader in
                    Online Learning
                  </div>
                  <h1 className="title">
                    The Largest{" "}
                    <span className="color-primary">Online Learning</span>{" "}
                    Platform for Drive Your Career.
                  </h1>
                  <p className="description">
                    This template includes all the necessary pages of the
                    onlineLorem. And you can be build Link{" "}
                    <strong>education template easily</strong>.
                  </p>
                  <div className="slider-btn">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View Course</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <div className="banner-card pb--60 swiper rbt-dot-bottom-center banner-swiper-active">
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
        </div>
      </div>
    </>
  );
};

export default ClassicLms;
