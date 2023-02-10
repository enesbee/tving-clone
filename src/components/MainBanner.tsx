import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { getImagePath } from "../util/utils";
import styled from "styled-components";
import { useQuery } from "react-query";
import { IGetBanner } from "../interface/IGetBanner";
import { getBanner } from "../api";

const Banner = styled.div`
  height: calc(44.5vw);
  overflow: hidden;

  img {
    width: 100%;
    vertical-align: bottom;
  }
`;

const BannerInfo = styled.p`
  position: absolute;
  bottom: 25%;
  right: 20rem;
  display: flex;
  flex-wrap: wrap;
  left: 3.888rem;
  width: 100%;
  margin: 1rem 0 0;
  opacity: 0.87;
  font-size: 1.5rem;
  line-height: 1.44;
  text-align: left;
  color: rgb(255, 255, 255);
`;
function MainBanner() {
  const { data, isLoading } = useQuery<IGetBanner>(
    ["contents", "banner"],
    getBanner
  );
  return (
    <Banner>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
        autoplay
        effect="fade"
        loop
      >
        {data?.body?.result.map((banner) => (
          <SwiperSlide key={banner.display_position}>
            <img
              src={getImagePath(banner?.content?.banner_image_url!)}
              alt={banner.content?.banner_title}
            />
            <BannerInfo>{banner?.content?.banner_sub_title3}</BannerInfo>
          </SwiperSlide>
        ))}
      </Swiper>
    </Banner>
  );
}

export default MainBanner;