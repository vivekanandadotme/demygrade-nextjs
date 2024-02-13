import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import PageHead from "../../Head";

import Service from "@/components/Services/Service";
import ServiceTwo from "@/components/Services/Service-Two";
import ServiceThree from "@/components/Services/Service-Three";
import ServiceFour from "@/components/Services/Service-Four";
import ServiceFive from "@/components/Services/Service-Five";
import ServiceSix from "@/components/Services/Service-Six";
import ServiceSaven from "@/components/Services/Service-Saven";
import ServiceEight from "@/components/Services/Service-Eight";
import ServiceNine from "@/components/Services/Service-Nine";
import ServiceTen from "@/components/Services/Service-Ten";
import ServiceEleven from "@/components/Services/Service-Eleven";
import ServiceTwelve from "@/components/Services/Service-Twelve";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";

const ServicePage = () => {
  return (
    <>
      <PageHead title="Service Box - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Service Box" text="Service Box" />

          <div className="rbt-service-area bg-color-white rbt-section-gap">
            <Service />
          </div>
          <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
            <ServiceTwo />
          </div>
          <div className="rbt-service-area bg-color-white rbt-section-gap">
            <ServiceThree />
          </div>
          <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
            <ServiceFour />
          </div>
          <div className="rbt-service-area bg-color-white rbt-section-gap">
            <ServiceFive />
          </div>
          <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
            <ServiceSix />
          </div>
          <div className="rbt-service-area bg-color-white rbt-section-gap">
            <ServiceSaven isTitle={true} />
          </div>
          <div className="rbt-service-area bg-color-extra2 rbt-section-gap">
            <ServiceEight isHead={true} />
          </div>
          <div className="rbt-service-area bg-color-white rbt-section-gap">
            <ServiceNine />
          </div>
          <div className="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
            <ServiceTen />
          </div>
          <div className="rbt-rbt-card-area bg-color-white rbt-section-gap">
            <ServiceEleven />
          </div>
          <div className="rbt-rbt-card-area bg-color-extra2 rbt-section-gap">
            <ServiceTwelve />
          </div>

          <BackToTop />
          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ServicePage;
