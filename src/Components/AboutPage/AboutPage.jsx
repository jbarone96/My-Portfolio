import React from "react";
import { Card } from "react-bootstrap";
import "../AboutPage/AboutPage.css";
import Particle from "../ReactParticles/Particle";
import SwiperCore, { EffectCreative, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCreative, Pagination, Navigation]);

function AboutPage() {
  return (
    <>
      <Particle />
      <Card className="about-card">
        <Card.Title className="about-title" style={{ fontSize: "28px" }}>
          About The Developer
        </Card.Title>
        <Card.Text className="about-paragraph">
          <p>
            Hello! My name is Jordan Barone and I am a software developer who
            has a commercial pilot's license! I have always had great
            problem-solving and critical thinking skills in addition to being
            able to work well under pressure. I am eager to put my software
            development skills to the test in the real world to begin working as
            a professional software engineer. I know I will make a valuable
            asset and I am ready to unleash my skills and creativity!
          </p>
          <p>
            I have always been great with computers and technology. I attended
            flight school right after I graduated college but then the pandemic
            hit and I was unable to find work. I thought to myself, "Why not do
            something involving computers?". Rather than go back to school to
            get an additional degree, I scoured the internet in search of a
            coding program. I stumbled across Kenzie Academy and the rest is
            history! I have developed a strong understanding of JavaScript and
            the MERN stack and am always looking to add new languages to my
            arsenal.
          </p>
          <p>
            When I'm not behind a computer, I enjoy playing video games, working
            on cars, playing golf and doing astrophotography! I have always been
            a gamer and two notable games that I have the most hours in are
            Counter Strike and ARK. Counter Strike is a competitive FPS game and
            ARK is an amazing survival game where you are dealing with dinosaurs
            that you can eventually tame and ride around the island! I've always
            been into cars ever since I saw the first Fast and Furious movie. I
            do 98% of all maintenance and modifications myself and I enjoy
            learning the way things work on cars. I enjoy going out for a round
            of golf every once in a while and I used to be pretty darn good; I
            was actually the captain of my high school golf team for 2 years and
            used to shoot in the mid 70's! Astrophotography is a new hobby I
            have picked up recently and it is absolutely amazing! It's humbling
            when you take that first photo of a galaxy 2.5 MILLION light years
            away, not to mention an unforgettable experience.
          </p>
        </Card.Text>
      </Card>
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
        style={{
          marginBottom: "100px",
          marginTop: "50px",
          width: "100%",
        }}
      >
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "10px",
                color: "aliceblue",
                textAlign: "center",
              }}
            >
              A photo I took of the Andromeda Galaxy... 2.5 MILLION light years
              away!
            </p>
            <img
              src="Images/andromeda_galaxy.JPG"
              className="swiper-image"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "90px",
                color: "aliceblue",
                textAlign: "center",
              }}
            >
              <strong>A photo I took of a lunar eclipse</strong>
            </p>
            <img
              src="Images/eclipse.jpg"
              className="swiper-image"
              alt=""
              style={{ height: "900px", marginTop: "-90px", width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "390px",
                color: "black",
                textAlign: "center",
              }}
            >
              <strong>One of my cars that I wrapped</strong>
            </p>
            <img
              src="Images/sti_2.png"
              className="swiper-image"
              alt=""
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "90px",
                color: "black",
                textAlign: "center",
              }}
            >
              <strong>A Krispy Kreme burger because why not?!</strong>
            </p>
            <img
              src="Images/krispykreme.jpg"
              className="swiper-image"
              alt=""
              style={{ height: "800px", marginBottom: "150px", width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "90px",
                color: "black",
                textAlign: "center",
              }}
            >
              <strong>Flying around the clouds</strong>
            </p>
            <img
              src="Images/plane_1.jpg"
              className="swiper-image"
              alt=""
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "90px",
                color: "black",
                textAlign: "center",
              }}
            >
              <strong>A flight to the beach</strong>
            </p>
            <img
              src="Images/plane_2.jpg"
              className="swiper-image"
              alt=""
              style={{
                height: "1100px",
                maxWidth: "800px",
                marginTop: "-220px",
                width: "100%",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={{ position: "relative", bottom: "50px" }}>
            <p
              className="about-paragraph"
              style={{
                position: "absolute",
                left: "25%",
                right: "25%",
                marginTop: "90px",
                color: "black",
                textAlign: "center",
              }}
            >
              <strong>Flying above the clouds</strong>
            </p>
            <img
              src="Images/plane_3.jpg"
              className="swiper-image"
              alt=""
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default AboutPage;
