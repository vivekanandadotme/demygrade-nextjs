import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";

const AboutSix = ({ btnClass, btnText }) => {
  return (
    <>
      {AboutData &&
        AboutData.aboutSix.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6">
              <div className="content">
                <Image
                  src={data.img}
                  width={638}
                  height={410}
                  alt="About Images"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="inner pl--50 pl_sm--5">
                <div className="section-title text-start">
                
                  <h2 className="title">Enjoying Learning With Unique Classroom Experence</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <div className="read-more-btn mt--40">

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutSix;
