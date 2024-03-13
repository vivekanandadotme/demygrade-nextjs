import Separator from "@/components/Common/Separator";
import Counter from "../Counters/Counter";
import About from "@/components/Abouts/About";
import ServiceSeven from "@/components/Services/Service-Seven";
import CardFour from "@/components/Cards/Card-Four";
import CategoryThreeSlider from "@/components/Category/CategoryThreeSlider";
import BrandOne from "@/components/Brand/Brand-Three";
import TestimonialTwo from "@/components/Testimonials/Testimonial-Two";
const MainDemo = () => {
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <About/>
          </div>
        </div>

        <Separator />

        <div className="rbt-service-area bg-color-white rbt-section-gap">
            <ServiceSeven isTitle={true} />
        </div>

      

        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <Counter isDesc={false} />
          </div>
        </div>
        <Separator />
        <div className="rbt-rbt-card-area rbt-section-gap bg-color-extra2">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">Card Style Four</h2>
                  </div>
                </div>
              </div>
              <CardFour />
            </div>
        </div>

        <div className="rbt-categories-area bg-color-white rbt-section-gap">
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h5 className="title">Style Three</h5>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--60">
                  <h5 className="title">Carousel (Slider)</h5>
                </div>
              </div>
            </div>
            <div className="row">
             <div className="col-lg-12">
                <CategoryThreeSlider />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="rbt-brand-area bg-color-white rbt-section-gap">
            <div className="container">
              <BrandOne />
            </div>
        </div>

        <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        EDUCATION FOR EVERYONE
                      </span>
                      <h2 className="title">
                        People like histudy education. <br /> No joking - here’s
                        the proof!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TestimonialTwo />
          </div>
      </main>
    </>
  );
};

export default MainDemo;
