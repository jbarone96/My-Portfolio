import React from "react";
import { Button } from "react-bootstrap";
import SwiperCore, { EffectCreative, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Particle from "../ReactParticles/Particle";
import "../ProjectsPage/ProjectsPage.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCreative, Pagination, Navigation]);

function ProjectsPage() {
  return (
    <>
      <div
        className="projects-title"
        style={{
          marginBottom: "-10px",
          fontSize: "32px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        ReactWeather
      </div>
      <Swiper
        effect={"creative"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCreative]}
        navigation={true}
        loop={true}
        className="swiper"
        style={{ width: "100%" }}
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="/Images/react-weather.png"
            alt=""
            style={{ height: "600px", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/react-weather2.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/react-weather3.png"
            alt=""
            style={{ height: "475px", width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/react-weather4.png"
            alt=""
            style={{
              height: "450px",
              maxWidth: "90%",
              scale: "1.12",
              marginLeft: "40px",
              width: "100%",
            }}
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="projects-info"
        style={{
          marginTop: "10px",
          fontSize: "24px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        React/TailwindCSS
      </div>
      <div
        className="projects-info"
        style={{
          fontSize: "18px",
          maxWidth: "750px",
          margin: "auto",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        ReactWeather is a weather application that allows the user to choose
        from the list of some popular cities, search for a specific city, or
        allow the application to get the weather for the user's current
        location. This application uses an API call that returns data that is
        displayed for the user. Some of the features of this application are
        humidity, 'feels like' temperature, wind speed and future forecasts for
        the selected area. The application was styled solely with TailwindCSS
        and does include notifications using react-toastify.
      </div>
      <div className="projects-button">
        <Button
          variant="success"
          href="https://react-weather-app-eta-nine.vercel.app/"
        >
          Visit Website
        </Button>
      </div>
      <div
        className="projects-title"
        style={{
          marginBottom: "-10px",
          fontSize: "32px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        Top Eats
      </div>
      <Swiper
        effect={"creative"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCreative]}
        navigation={true}
        loop={true}
        className="swiper"
        style={{ width: "100%" }}
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="/Images/top_eats_2.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_3.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_4.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_5.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_6.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_7.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/top_eats_8.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="projects-info"
        style={{
          marginTop: "10px",
          fontSize: "24px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        React/CSS/Node.js/Express/MongoDB
      </div>
      <div
        className="projects-info"
        style={{
          fontSize: "18px",
          maxWidth: "750px",
          margin: "auto",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        Top Eats is a full-stack application that allows the user to discover
        their new favorite restaurants! This application will show you
        restaurants that match your cuisine preferences and location, as well as
        reviews and ratings left by other users. If the user creates an account
        (not required), reviews and ratings can be left for others to view. This
        application utilizes the Yelp API to get the list of restaurants based
        on the user's search parameters. The application utilizes local storage
        so that if a user closes the tab or window and returns, the user will
        still remain logged into their account. There are email and password
        requirements that the user must follow in order for an account to be
        created using form validation.
      </div>
      <div className="projects-button">
        <Button variant="success" href="http://18.233.97.130/">
          Visit Website
        </Button>
      </div>
      <div
        className="projects-title"
        style={{
          marginBottom: "-20px",
          marginTop: "50px",
          fontSize: "32px",
          width: "100%",
        }}
      >
        Online Store
      </div>
      <Swiper
        effect={"creative"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCreative]}
        navigation={true}
        loop={true}
        className="swiper"
        style={{ width: "100%" }}
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_9.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_4.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_3.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_5.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_1.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_8.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-image"
            src="Images/online_store_7.png"
            alt=""
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="projects-info"
        style={{
          marginTop: "10px",
          fontSize: "24px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        React/CSS/Node.js/Express/MongoDB
      </div>
      <div
        className="projects-info"
        style={{
          fontSize: "18px",
          maxWidth: "750px",
          margin: "auto",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        This React built online store allows the user to shop for items, add the
        items to their cart, and checkout just like you would on Amazon or any
        other online store. This application uses form validation for the order
        forms and once the order has been placed, it gets sent to the database
        to give the user a confirmation of their order. Users are also able to
        filter by category or sort the items by price from high to low or low to
        high. Users can also utilize the search feature if they would like to
        search for a particular item in the store. International users are able
        to swap the currency of the entire store to Euros for an enhanced user
        experience!
      </div>
      <div className="projects-button">
        <Button
          variant="success"
          href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        >
          View Code on GitHub
        </Button>
      </div>
      <Particle />
    </>
  );
}

export default ProjectsPage;
