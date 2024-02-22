import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                      Histudy Course Contact <br /> can join with us.
                    </h2>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>

          <ContactForm />

          <div className="rbt-google-map bg-color-white rbt-section-gapTop">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.51930811937802!2d83.29520220487129!3d17.730077126550267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394327baeab4e3%3A0x3b8662cf6cce032b!2s43-3-29%2FC%2C%20Sri%20Siddi%20Enclave%2C%20Railway%20New%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530016!5e0!3m2!1sen!2sin!4v1708411996033!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div>

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
