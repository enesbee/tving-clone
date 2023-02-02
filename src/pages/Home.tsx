import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getContent } from "../api";
import { IGetContent } from "../interface/IGetContent";
import { getImagePath } from "../util/utils";
import { motion } from "framer-motion";

const Wrapper = styled.div``;
const Banner = styled.div``;
const Loader = styled.div``;
const Slider = styled.div`
  padding: 0 3.888rem;
  margin-top: -5rem;
  z-index: 1;
  position: relative;
`;
const Title = styled.h3``;
const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }

  img {
    width: 100%;
    vertical-align: bottom;
  }
`;
function Home() {
  const { data, isLoading } = useQuery<IGetContent>(
    ["contents", "content"],
    getContent
  );
  console.log(data?.body);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
          >
            <rect x="20" y="50" width="4" height="10" fill="#fff">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0"
                dur="0.6s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
            <rect x="30" y="50" width="4" height="10" fill="#fff">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s"
                dur="0.6s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
            <rect x="40" y="50" width="4" height="10" fill="#fff">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s"
                dur="0.6s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
          </svg>
        </Loader>
      ) : (
        <>
          <Banner></Banner>
          <Slider>
            <Title>{data?.body?.info.title}</Title>
            <Row>
              {data?.body?.result.map((vod) => (
                <Box>
                  <img
                    src={getImagePath(vod.content.program.image[3].url)}
                    alt=""
                  />
                </Box>
              ))}
            </Row>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;