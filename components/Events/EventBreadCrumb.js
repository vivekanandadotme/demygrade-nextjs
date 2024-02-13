import Image from "next/image";

import bgImg from "../../public/images/bg/bg-image-10.jpg";
import Link from "next/link";

const EventBreadCrumb = ({ getMatchEvent }) => {
  return (
    <>
      <div className="breadcrumb-inner">
        <Image src={bgImg} alt="Education Images" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    {getMatchEvent.category}
                  </li>
                </ul>
                <h2 className="title mb--0">{getMatchEvent.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBreadCrumb;
