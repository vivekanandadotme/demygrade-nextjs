import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import BlogData from "../../data/blog/blog.json";
import BlogListItems from "./Blog-Sections/BlogList-Items";
import Pagination from "../Common/Pagination";

const BlogList = ({ isPagination }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 7;
  const selectedBlogs = blogs.slice(startIndex, startIndex + 7);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getBlogs = () => {
      setBlogs(BlogData.blogList);
      setTotalPages(Math.ceil(BlogData.blogList.length / 7));
    };

    getBlogs();
  }, [BlogData, setBlogs, setTotalPages, 7]);

  return (
    <>
      <>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mt_dec--30">
            {BlogData &&
              selectedBlogs.slice(0, 1).map((data, index) => (
                <div className="col-12 mt--30" key={index}>
                  <div className="rbt-card variation-02 height-auto rbt-hover">
                    <div className="rbt-card-img">
                      <Link href={`/blog-details/${data.id}`}>
                        <Image
                          src={data.img}
                          width={1085}
                          height={645}
                          priority
                          alt="Card image"
                        />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h3 className="rbt-card-title">
                        <Link href={`/blog-details/${data.id}`}>
                          {data.title}
                        </Link>
                      </h3>
                      <p className="rbt-card-text">{data.desc}</p>
                      <div className="rbt-card-bottom">
                        <Link
                          className="transparent-button"
                          href={`/blog-details/${data.id}`}
                        >
                          Learn More
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <BlogListItems selectedBlogs={selectedBlogs} start={1} end={6} />
          </div>
        </div>

        {isPagination ? (
          <div className="row">
            <div className="col-lg-12 mt--60">
              <Pagination
                totalPages={totalPages}
                pageNumber={page}
                handleClick={handleClick}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default BlogList;
