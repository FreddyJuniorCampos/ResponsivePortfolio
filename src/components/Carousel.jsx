import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CredentialCard from "./CredentialCard";
import useQuery from "../hooks/useQuery";
import { certificactions } from "../documents/certifications";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import "swiper/css";

const Carousel = () => {
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
        {certificactions.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.ref} target="_blank">
              <CredentialCard
                credentialImg={item.image}
                credentialText={item.description}
                credentialTitle={item.name}
              />
            </a>
          </SwiperSlide>
        ))}
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
