import React from "react";
import styled from "styled-components";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
import { IGetThemes } from "../interface/IGetThemes";
import { getThemes } from "../api";
import "./MainContents.css";
import { Link } from "react-router-dom";
import { getImagePath } from "../util/utils";

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
function MainThemes() {
  const { data, isLoading } = useQuery<IGetThemes>(
    ["contents", "themes"],
    getThemes
  );
  console.log(data);
  return (
    <>
      {data?.body?.result.map((theme) => (
        <Contents>
          <Content key={theme.theme_seq}>
            <Title>{theme.title}</Title>
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
                {theme.contents.map((item) => (
                  <SwiperSlide key={item.display_position}>
                    <Link to={`contents/${item?.content.program.code}`}>
                      <img
                        loading="lazy"
                        src={getImagePath(
                          `/upload/cms/caip/CAIP0900/${item?.content.program.code}.jpg`,
                          "F_webp,400"
                        )}
                        alt={item?.content.program.name.ko}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Carousel>
          </Content>
        </Contents>
      ))}
    </>
  );
}

export default MainThemes;