import React from "react";
import styled from "styled-components";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImagePath } from "../util/utils";
import { useQuery } from "react-query";
import { IGetContent } from "../interface/IGetContent";
import { getContent } from "../api";
import { Link } from "react-router-dom";
import "./MainContents.css";

const Contents = styled.div``;
const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 0 3.888rem;
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
  margin: -4rem -3.888rem -1.5rem;
  padding: 4rem 3.888rem 2.5rem;
`;
function MainContents() {
  const { data, isLoading } = useQuery<IGetContent>(
    ["contents", "content"],
    getContent
  );
  return (
    <Contents>
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
    </Contents>
  );
}

export default MainContents;