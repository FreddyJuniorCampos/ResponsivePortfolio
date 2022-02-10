import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CredentialCard from "./CredentialCard";
import Avatar from "../assets/static/avatar1.png";
import useQuery from "../hooks/useQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";

const Carousel = () => {
  const lorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi impedit molestias nisi aperiam suscipit ex veritatis saepe minus recusandae culpa doloribus quo vitae aut ducimus ea, ipsam officiis laudantium porro.";

  const size = useQuery();

  return (
    <div style={carouselContainer(size)}>
      <Swiper
        slidesPerView={sliderView(size)}
        spaceBetween={size === "sm" ? 0 : 30}
        slidesPerGroup={sliderView(size)}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CredentialCard
            credentialImg={Avatar}
            credentialText={lorem}
            credentialTitle="Credential 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CredentialCard
            credentialImg={Avatar}
            credentialText={lorem}
            credentialTitle="Credential 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CredentialCard
            credentialImg={Avatar}
            credentialText={lorem}
            credentialTitle="Credential 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CredentialCard
            credentialImg={Avatar}
            credentialText={lorem}
            credentialTitle="Credential 1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

const carouselContainer = (size) => {
  if (size === "sm") return { width: "300px" };
  if (size === "md") return { width: "700px" };
  else return {};
};

const sliderView = (size) => {
  if (size === "sm") return 1;
  if (size === "md") return 2;
  else return 3;
};
