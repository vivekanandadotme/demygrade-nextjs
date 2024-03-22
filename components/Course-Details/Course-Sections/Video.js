import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CourseData from "../../../data/course-details/courseData.json";
import "venobox/dist/venobox.min.css";
import { nanoid } from 'nanoid'; // Make sure you've installed nanoid package
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const Video = ({ checkMatchCourses }) => {
  const router = useRouter();
  const path = router.asPath;
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      // Check if the script is already loaded
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
  
      // Create a new script element
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        console.error('Razorpay SDK failed to load.');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  
  // Function to initiate payment
  const initiatePayment = async () => {
    const scriptLoaded = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
    try {
      // Call your API endpoint to create a Razorpay order
      const orderResponse = await fetch('../api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          courseAmount: checkMatchCourses.price * 100, // assuming this is the price for the course
          currency: 'INR',
          fullName,
          email,
          phone,
          courseID: checkMatchCourses.id,
        })
      });

      const orderData = await orderResponse.json();
      
      // Check if Razorpay's checkout library is available
      if (!window.Razorpay) {
        throw new Error('Unable to load Razorpay SDK.');
      }
      
      // If Razorpay library is loaded and order was created successfully
      const options = {
        key: "rzp_test_VghPtJYubxrOEC", // Use Razorpay key_id here and store it in .env.local
        amount: orderData.amount, // amount in the smallest currency unit
        currency: orderData.currency,
        name: 'Your Company Name',
        description: 'Course Payment',
        image: 'path_to_logo', // If you have a logo
        order_id: orderData.id, //This is a sample Order ID. Pass the `id` obtained in the response of the previous API call
        handler: function (response) {
          // Payment was successful. You can store these details in your server
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_signature);
          // Implement what should happen after payment is successful
        },
        prefill: {
          name: fullName,
          email: email,
          contact: phone
        },
        theme: {
          color: '#F37254'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  // ... rest of your existing code

  return (
    <>
      <Link
        className={`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${hideOnScroll ? "d-none" : ""
          }`}
        data-vbtype="video"
        href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
      >
        <div className="video-content">
          {checkMatchCourses.courseImg && (
            <Image
              className="w-100 rbt-radius"
              src={checkMatchCourses.courseImg}
              width={355}
              height={255}
              alt="Video Images"
            />
          )}
		  
        </div>
      </Link>
      <div className="content-item-content">
        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
          <div className="rbt-price">
            <span className="current-price">${checkMatchCourses.price}</span>
            <span className="off-price">${checkMatchCourses.offPrice}</span>
          </div>

        </div>

        <div className="buy-now-btn mt--15" >
		  <Link
                    className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target={`#buyNowModal${checkMatchCourses.id}`}
          >
            <span className="btn-text">Buy Now</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
		  </div>

      <div
          className={`rbt-widget-details has-show-more ${toggle ? "active" : ""
            }`}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {checkMatchCourses &&
              checkMatchCourses.roadmap.map((item, innerIndex) => (
                <li key={innerIndex}>
                  <span>{item.text}</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {item.desc}
                  </span>
                </li>
              ))}
          </ul>

        </div>

        <div className="social-share-wrapper mt--30 text-center">
          <div className="rbt-post-share d-flex align-items-center justify-content-center">
            <div>
              <p className="video-share" style={{fontSize:"15px"}}>Share this course</p>
              <ul className="social-icon social-default transparent-with-border justify-content-center"> 
                <li>
                  <Link href={"https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000" + path}>
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href={"https://twitter.com/intent/tweet?url=http://localhost:3000" + path}>
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000" + path}>
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href={"mailto:?subject=Check out this course&body=http://localhost:3000" + path}>
                    <i className="feather-mail"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt--20" />
          <div className="contact-with-us text-center">
            <p>For details about the course</p>
            <p className="rbt-badge-2 mt--10 justify-content-center w-100">
              <i className="feather-phone mr--5"></i> Call Us:{" "}
              <Link href="#">
                <strong>+444 555 666 777</strong>
              </Link>

            </p>
          </div>
          <div className="contact-with-us text-center">
            <p className="mt--25 ">
              <Link className={`rbt-btn btn-border radius-round`} href="#">
                <strong>Request CallBack</strong>
              </Link>
            </p>
          </div>
        </div>

      </div>
		   {CourseData.courseDetails.map((data, index) => (
      <div className="rbt-team-modal modal fade rbt-modal-default"
            id={`buyNowModal${data.id}`}
            tabIndex="-1"
            aria-labelledby={`buyNowModal${data.id}`}
            aria-hidden="true"
            key={index}
			data-bs-backdrop="false"
			data-bs-keyboard="false"
			>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNowModalLabel">{checkMatchCourses.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Course title and price */}
              <h3>{checkMatchCourses.courseTitle}</h3>
              <p className="price">Course Price: INR {checkMatchCourses.price}</p>
              
              {/* Payment form */}
              <div className="form-group">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Email ID"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={initiatePayment}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
       ))}
    </>
  );
};

export default Video;

