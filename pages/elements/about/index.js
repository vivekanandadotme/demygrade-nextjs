import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import About from "@/components/Abouts/About";
import AboutEight from "@/components/Abouts/About-Eight";
import AboutFive from "@/components/Abouts/About-Five";
import AboutFour from "@/components/Abouts/About-Four";
import AboutSaven from "@/components/Abouts/About-Saven";
import AboutSix from "@/components/Abouts/About-Six";
import AboutThree from "@/components/Abouts/About-Three";
import AboutTwo from "@/components/Abouts/About-Two";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="About" text="About" />

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <About />
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutTwo />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutThree />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFour />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutFive />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutSix
                btnClass="radius rbt-marquee-btn marquee-text-y"
                btnText="Learn More"
              />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutSaven />
            </div>
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <div className="container">
              <AboutEight />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default AboutPage;
