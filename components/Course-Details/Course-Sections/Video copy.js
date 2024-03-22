import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import CourseData from "../../../data/course-details/courseData.json";
import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const Video = ({ checkMatchCourses }) => {
  const router = useRouter();
  const path = router.asPath;
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);



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
      {CourseData.courseDetails.map((data, index) => (
	  <div
            className="rbt-team-modal modal fade rbt-modal-default"
            id={`buyNowModal${data.id}`}
            tabIndex="-1"
            aria-labelledby={`buyNowModal${data.id}`}
            aria-hidden="true"
            key={index}
			data-bs-backdrop="false"
			data-bs-keyboard="false"
          >
              <div
                className="modal-dialog modal-dialog-centered"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="rbt-round-btn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="feather-x"></i>
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="inner">
                      <div className="row g-5 row--30 align-items-center">
                        <div className="col-lg-4">
                          <div className="rbt-team-thumbnail">
                            <div className="thumb">
                              <Image
                                className="w-100"
                                width={415}
                                height={555}
                                priority
                                alt="Testimonial Images"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="rbt-team-details">
                            <div className="author-info">
                              <h4 className="title">{data.courseTitle}</h4>
                              <span className="designation theme-gradient">
                                item.type
                              </span>
                              <span className="team-form">
                                <i className="feather-map-pin"></i>
                                <span className="location">
                                  item.location
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="top-circle-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    ))}
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
	  <div
            className="rbt-team-modal modal fade rbt-modal-default"
            id={`buyNowModal${index}`}
            tabIndex="-1"
            aria-labelledby={`buyNowModal${index}`}
            aria-hidden="true"
            key={index}
          >
              <div
                className="modal-dialog modal-dialog-centered"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="rbt-round-btn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="feather-x"></i>
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="inner">
                      <div className="row g-5 row--30 align-items-center">
                        <div className="col-lg-4">
                          <div className="rbt-team-thumbnail">
                            <div className="thumb">
                              <Image
                                className="w-100"
                                width={415}
                                height={555}
                                priority
                                alt="Testimonial Images"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="rbt-team-details">
                            <div className="author-info">
                              <h4 className="title">{data.courseTitle}</h4>
                              <span className="designation theme-gradient">
                                item.type
                              </span>
                              <span className="team-form">
                                <i className="feather-map-pin"></i>
                                <span className="location">
                                  item.location
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="top-circle-shape"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    ))};
  </>
  );
};

export default Video;
