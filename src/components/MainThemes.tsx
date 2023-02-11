import React from "react";
import styled from "styled-components";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImagePath } from "../util/utils";
import { useQuery } from "react-query";
import { IGetThemes } from "../interface/IGetThemes";
import { getThemes } from "../api";
import { Link } from "react-router-dom";
import "./MainContents.css";

const Content = styled.div`
  margin-top: -5rem;
  z-index: 1;
  position: relative;
  padding-left: 3.888rem;
  padding-right: 3.888rem;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0 0 1rem;
  font-size: 1.667rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;
const Carousel = styled.div`
  overflow: hidden;
  margin: -4rem -1.333rem -1.5rem;
  padding: 4rem 1.333rem 2.5rem;
  padding-left: 3.888rem;
  padding-right: 3.888rem;
  margin-left: -3.888rem;
  margin-right: -3.888rem;
`;
function MainThemes() {
  const { data, isLoading } = useQuery<IGetThemes>(
    ["contents", "themes"],
    getThemes
  );
  console.log(data);
  return (
    <Content>
      <Title>{data?.body?.info.title}</Title>
      <Carousel>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          scrollbar={false}
          spaceBetween={11}
          slidesPerView={8}
        >
          {data?.body?.result.slice(0, 20).map((banner) => (
            <SwiperSlide key={banner.display_position}>
              <Link to={`contents/${banner?.content_code}`}>
                <img
                  loading="lazy"
                  src={getImagePath(
                    `/upload/cms/caip/CAIP0900/${banner?.content_code}.jpg`,
                    "F_webp,400"
                  )}
                  alt={banner.mapping_contents_name}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Content>
  );
}

export default MainThemes;