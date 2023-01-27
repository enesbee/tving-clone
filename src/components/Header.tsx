import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 3.888rem;
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    margin-right: 3.083rem;
  }
`;
const Logo = styled.svg`
  width: 7.333rem;
`;
const Nav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.li`
  line-height: 2rem;
  margin-right: 2.333rem;
  vertical-align: middle;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 0.417rem;
  }
  span {
    vertical-align: middle;
  }

  > a {
    font-size: 1.333rem;
    display: inline-block;
  }
`;
const Search = styled.button`
  cursor: pointer;
`;
function Header() {
  return (
    <HeaderDiv>
      <Col>
        <Link to="/">
          <Logo
            xmlns="http://www.w3.org/2000/svg"
            width="425.675"
            height="104.438"
            viewBox="0 0 425.675 104.438"
          >
            <path
              d="m 278.8942,58.886799 20.73148,41.836801 h 32.2139 V 2.5768077 h -30.8399 V 43.432868 a 2.7334477,2.7334477 0 0 1 -5.18529,1.213787 L 274.9761,2.5768077 H 242.7622 V 100.71874 h 30.93214 V 60.095731 a 2.7334477,2.7334477 0 0 1 5.1853,-1.208932 M 195.05552,2.5768077 h 33.82581 V 100.71874 h -33.82581 z m 146.7808,39.7830733 v 18.090276 c 0,17.595052 6.63699,30.315536 19.72161,37.802173 20.87713,11.94852 50.9402,4.57355 64.11707,-5.170732 V 47.409234 h -30.54858 v 28.723047 l -0.58262,0.228192 a 17.434832,17.434832 0 0 1 -14.99755,-1.14096 16.298728,16.298728 0 0 1 -5.97183,-14.429496 V 40.548911 a 10.919225,10.919225 0 0 1 8.17121,-11.841703 11.327058,11.327058 0 0 1 13.45847,7.617725 L 424.79622,20.453458 A 40.812364,40.812364 0 0 0 387.17854,0.06184161 c -1.99546,0 -3.93752,0.09710294 -5.78733,0.26217793 A 46.725933,46.725933 0 0 0 354.16354,11.155852 40.525911,40.525911 0 0 0 341.8606,42.359881 M 83.930924,2.5768077 H 0 V 31.309567 H 25.246764 V 100.73817 H 58.635608 V 31.309567 h 25.27104 z m 69.297506,0 -21.14902,65.7144113 a 2.7334477,2.7334477 0 0 1 -5.34066,-0.835086 V 2.5719525 H 94.665653 V 100.71874 H 155.31129 L 188.50593,2.5768077 Z"
              fill="#ffffff"
            />
          </Logo>
        </Link>
      </Col>
      <Col>
        <Nav>
          <NavItem>
            <Link to="live">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g transform="translate(2 2.393)">
                    <path d="M0 0H24V24H0z" transform="translate(-2 -2.393)" />
                    <g transform="translate(-2 0.58)">
                      <g transform="translate(4.6 8.423)">
                        <path
                          d="M900.019 37.073h-3.165v-5.1h.792v4.413h2.374z"
                          stroke="#fff"
                          stroke-linejoin="round"
                          fill="#fff"
                          stroke-width="0.2px"
                          transform="translate(-896.854 -31.974)"
                        />
                        <path
                          d="M900.752 37.073v-5.1h.792v5.1z"
                          stroke="#fff"
                          stroke-linejoin="round"
                          fill="#fff"
                          stroke-width="0.2px"
                          transform="translate(-896.54 -31.974)"
                        />
                        <path
                          d="M904.117 37.073l-1.819-5.1h.859l1.388 4.208h.022l1.392-4.208h.845l-1.82 5.1z"
                          stroke="#fff"
                          stroke-linejoin="round"
                          fill="#fff"
                          stroke-width="0.2px"
                          transform="translate(-896.249 -31.974)"
                        />
                        <path
                          d="M910.574 37.073h-3.236v-5.1h3.236v.682h-2.444v1.491h2.314v.654h-2.314v1.583h2.444z"
                          stroke="#fff"
                          stroke-linejoin="round"
                          fill="#fff"
                          stroke-width="0.2px"
                          transform="translate(-895.737 -31.974)"
                        />
                      </g>
                      <g opacity="0.901">
                        <g
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2px"
                          opacity="0.998"
                          transform="translate(0 3.025)"
                        >
                          <rect width="24" height="16" stroke="none" rx="3" />
                          <rect
                            width="22.8"
                            height="14.8"
                            x=".6"
                            y=".6"
                            rx="2.4"
                          />
                        </g>
                        <g opacity="0.998" transform="translate(8.671 0.527)">
                          <path
                            d="M3.055 3L0 0"
                            stroke="#fff"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="1.2px"
                            transform="translate(-0.471)"
                          />
                          <path
                            d="M0 3L3.055 0"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-width="1.2px"
                            stroke-linejoin="round"
                            transform="translate(4.024)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              실시간
            </Link>
          </NavItem>
          <NavItem>
            <Link to="tv">TV프로그램</Link>
          </NavItem>
          <NavItem>
            <Link to="movie">영화</Link>
          </NavItem>
          <NavItem>
            <Link to="/">파라마운트+</Link>
          </NavItem>
        </Nav>
      </Col>
      <Col>
        <Search>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <g opacity="0.997">
              <path fill="rgba(255,255,255,0)" d="M0 0H28V28H0z" />
              <g fill="none" stroke="#fff" stroke-width="1.5px">
                <path
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  d="M0 0L4.813 4.89"
                  transform="translate(3 3) translate(15.688 16.574)"
                />
                <g transform="translate(3 3) translate(1 1)">
                  <circle cx="9" cy="9" r="9" stroke="none" />
                  <circle cx="9" cy="9" r="8.25" />
                </g>
              </g>
            </g>
          </svg>
        </Search>
      </Col>
    </HeaderDiv>
  );
}

export default Header;