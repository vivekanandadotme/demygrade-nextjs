import { useRouter } from "next/router";
import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderEight from "./Headers/Header-Eight";

const HeaderStyleTen = ({ headerSticky }) => {
  const router = useRouter();
  return (
    <>
      <header className="rbt-header rbt-header-10">
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
