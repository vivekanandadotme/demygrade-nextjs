import Banner from "@/components/About-Us-01/Banner";
import ServiceSix from "@/components/Services/Service-Six";
import About from "@/components/Abouts/About";

import AboutSeven from "@/components/Abouts/About-Seven";
import AboutSix from "@/components/Abouts/About-Six";
import AboutSeven2 from "@/components/Abouts/About-SevenTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import FooterThree from "@/components/Footer/Footer-Three";



const Home = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

          <div
            className="slider-area rbt-banner-10 height-750 bg_image bg_image--11"
            data-black-overlay="5"
          >
            <Banner />
          </div>

          <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
            <About />
          </div>

          <div className="rbt-about-area about-style-1 bg-color-extra2 rbt-section-gap">
            <div className="container">
              <AboutSeven />
            </div>

            <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
              <div className="container">
                <AboutSix
                  btnClass="radius rbt-marquee-btn marquee-text-y"
                  btnText="Learn More"
                />
              </div>
              <div className="container">
                <AboutSeven2 />
              </div>
            </div>



          </div>


          <div className="rbt-service-area bg-color-extra2">
            <ServiceSix />
          </div>

          <FooterThree />
        </Context>
      </Provider>

    </>
  );
};

export default Home;
