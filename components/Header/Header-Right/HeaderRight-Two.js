import Link from "next/link";

import { useSelector } from "react-redux";
import ColorButton from "../../Button/ButtonProps/ColorButton";
import SectionHead from "../../Button/ButtonProps/SectionHead";
import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";

const HeaderRightTwo = ({ btnClass, btnText, userType }) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart } =
    useAppContext();

  const { total_items } = useSelector((state) => state.CartReducer);

  return (
    <div className="header-right">
      <ul className="quick-access">
        {/* <li className="access-icon">
          <Link
            className={`search-trigger-active rbt-round-btn ${
              search ? "" : "open"
            }`}
            href="#"
            onClick={() => setSearch(!search)}
          >
            <i className="feather-search"></i>
          </Link>
        </li> */}

        {/* <li className="access-icon rbt-mini-cart">
          <Link
            className="rbt-cart-sidenav-activation rbt-round-btn"
            href="#"
            onClick={() => setCart(!cartToggle)}
          >
            <i className="feather-shopping-cart"></i>
            <span className="rbt-cart-count">{total_items}</span>
          </Link>
        </li> */}

        {/* <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {userType}
          </Link>
          <User />
        </li> */}

        {/* <li className="access-icon rbt-user-wrapper d-block d-xl-none">
          <Link className="rbt-round-btn" href="#">
            <i className="feather-user"></i>
          </Link>
          <User />
        </li> */}
      </ul>

      {/* <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link className={`rbt-btn`} href="#">
          <span data-text={`${btnText}`}>{btnText}</span>
        </Link>
      </div> */}

<ColorButton
        head={
          <SectionHead
            textBg="bg-primary-opacity"
            title="Border Variation."
            text="Button Border"
          />
        }
        btnText="Histudy Button"
        // classOne="rbt-button-area rbt-section-gapBottom bg-color-white"
        // btnClassOne="btn-border square"
        // btnClassTwo="btn-border"
        // btnClassThree="btn-border radius-round-6"
        // btnClassFour="btn-border radius-round-10"
        btnClassFive="btn-border radius-round"
        lastbtn={false}
      />
      

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightTwo;
