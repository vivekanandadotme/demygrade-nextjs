import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}
