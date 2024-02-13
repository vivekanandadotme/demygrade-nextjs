import { useRouter } from "next/router";
import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderEight from "./Headers/Header-Eight";

const HeaderStyleTen = ({ headerSticky }) => {
  const router = useRouter();
  return (
    <>
      <header className="rbt-header rbt-header-10">
        {router.pathname === "/01-main-demo" &&
        "/16-udemy-affiliate" &&
        "/01-main-demo" ? (
          <HeaderTopBar />
        ) : (
          <HeaderTopEight
            bgColor="bg-not-transparent bg-color-darker"
            gapSpaceBetween="header-space-betwween"
            container="container-fluid"
            flexDirection=""
            btnClass="rbt-switch-btn btn-gradient btn-xs"
            btnText="Call us now"
          />
        )}
        <HeaderEight
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
        />
      </header>
    </>
  );
};
export default HeaderStyleTen;
