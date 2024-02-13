import Link from "next/link";
import React from "react";

const CourseLayout = ({ MenuData, courseTitle, type, courseType, num }) => {
  return (
    <>
      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
        <h3 className="rbt-short-title">{courseTitle}</h3>
        <ul className="mega-menu-item">
          {MenuData &&
            MenuData.menuData.map((data, index) => {
              if (data.menuType === type) {
                if (courseType) {
                  const coursElements = data.menuItems?.map(
                    (value, innerIndex) =>
                      innerIndex < num && (
                        <li key={innerIndex}>
                          <Link
                            href={value.coming ? "/maintenance" : value.link}
                          >
                            {value.title}
                            {value.coming ? (
                              <span className="rbt-badge-card ms-3">
                                {value.coming}
                              </span>
                            ) : value.subTitle ? (
                              <span className="rbt-badge-card">
                                {value.subTitle}
                              </span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                  );
                  return coursElements;
                }
                const coursElements = data.menuItems?.map(
                  (value, innerIndex) =>
                    innerIndex > num && (
                      <li key={innerIndex}>
                        <Link href={value.coming ? "/maintenance" : value.link}>
                          {value.title}
                          {value.coming ? (
                            <span className="rbt-badge-card ms-3">
                              {value.coming}
                            </span>
                          ) : value.subTitle ? (
                            <span className="rbt-badge-card ms-3">
                              {value.subTitle}
                            </span>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                    )
                );
                return coursElements;
              }
            })}
        </ul>
      </div>
    </>
  );
};
export default CourseLayout;
