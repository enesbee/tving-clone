import React from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import MainBanner from "../components/MainBanner";
import MainContents from "../components/MainContents";
import MainThemes from "../components/MainThemes";

const Wrapper = styled.div``;

const Loader = styled.div``;

function Home() {
  return (
    <Wrapper>
      {/*{isLoading ? (*/}
      {/*  <Loader>*/}
      {/*    <svg*/}
      {/*      version="1.1"*/}
      {/*      id="L9"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      x="0px"*/}
      {/*      y="0px"*/}
      {/*      viewBox="0 0 100 100"*/}
      {/*      enableBackground="new 0 0 0 0"*/}
      {/*    >*/}
      {/*      <rect x="20" y="50" width="4" height="10" fill="#fff">*/}
      {/*        <animateTransform*/}
      {/*          attributeType="xml"*/}
      {/*          attributeName="transform"*/}
      {/*          type="translate"*/}
      {/*          values="0 0; 0 20; 0 0"*/}
      {/*          begin="0"*/}
      {/*          dur="0.6s"*/}
      {/*          repeatCount="indefinite"*/}
      {/*        ></animateTransform>*/}
      {/*      </rect>*/}
      {/*      <rect x="30" y="50" width="4" height="10" fill="#fff">*/}
      {/*        <animateTransform*/}
      {/*          attributeType="xml"*/}
      {/*          attributeName="transform"*/}
      {/*          type="translate"*/}
      {/*          values="0 0; 0 20; 0 0"*/}
      {/*          begin="0.2s"*/}
      {/*          dur="0.6s"*/}
      {/*          repeatCount="indefinite"*/}
      {/*        ></animateTransform>*/}
      {/*      </rect>*/}
      {/*      <rect x="40" y="50" width="4" height="10" fill="#fff">*/}
      {/*        <animateTransform*/}
      {/*          attributeType="xml"*/}
      {/*          attributeName="transform"*/}
      {/*          type="translate"*/}
      {/*          values="0 0; 0 20; 0 0"*/}
      {/*          begin="0.4s"*/}
      {/*          dur="0.6s"*/}
      {/*          repeatCount="indefinite"*/}
      {/*        ></animateTransform>*/}
      {/*      </rect>*/}
      {/*    </svg>*/}
      {/*  </Loader>*/}
      {/*) : (*/}
      <>
        <MainBanner />
        <MainContents />
        <MainThemes />
      </>
      {/*)}*/}
    </Wrapper>
  );
}

export default Home;