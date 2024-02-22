import Image from "next/image";

import AboutData from "../../data/elements/about.json";

const AboutSeven2 = () => {
  return (
    <>
      {AboutData &&
        AboutData.aboutSaven.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="inner">
                <div className="section-title text-start">
                 
                  <h2 className="title">Passionate Teachers That Make a Difference</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  <div className="read-more-btn mt--40">
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="content">
                <Image
                  src={data.img}
                  width={638}
                  height={410}
                  alt="About Images"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutSeven2;
