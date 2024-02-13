import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import PageHead from "@/pages/Head";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import EventBreadCrumb from "@/components/Events/EventBreadCrumb";
import EventDetails from "@/components/Events/EventDetails";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import EventData from "../../../../data/events.json";
import BackToTop from "@/pages/backToTop";

const SingleEvent = () => {
  const router = useRouter();
  const postId = parseInt(router.query.eventId);
  let getEvent;

  getEvent = JSON.parse(JSON.stringify(EventData.events));

  const getMatchEvent = getEvent.find((event) => event.id === postId);

  useEffect(() => {
    if (postId && getMatchEvent === undefined) {
      router.push("/pages/event-list");
    }
  }, [getMatchEvent, router]);

  return (
    <>
      <PageHead title="Event Details - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />
          <Cart />

          <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            {getMatchEvent && <EventBreadCrumb getMatchEvent={getMatchEvent} />}
          </div>

          <div className="rbt-course-details-area rbt-section-gap">
            <div className="container">
              {getMatchEvent && <EventDetails getMatchEvent={getMatchEvent} />}
            </div>
          </div>

          <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
            <CallToActionFour btnClass="rbt-btn btn-gradient hover-icon-reverse" />
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleEvent;
