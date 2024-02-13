import PageHead from "@/pages/Head";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Cart from "@/components/Header/Offcanvas/Cart";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Pricing from "@/components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <>
      <PageHead title="Pricing - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Pricing" text="Pricing" />

          <div className="rbt-pricing-area bg-color-white rbt-section-gap">
            <Pricing title="Style One" tag="COURSE PRICING" />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default PricingPage;
