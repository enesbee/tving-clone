import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  padding: 7rem 3.888rem 10rem;
`;
const Col = styled.div`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: 1.666rem 0;
  color: rgb(163, 163, 163);

  &:first-child {
    flex: 1 1 0;
  }
`;
const Info = styled.div`
  border-bottom: 0.083rem solid rgb(33, 33, 33);
  display: flex;
  align-items: center;
`;

const InfoTitle = styled.span`
  color: rgb(110, 110, 110);
  padding-right: 1.083rem;
`;
const InfoContents = styled.span`
  color: rgb(163, 163, 163);

  &:hover {
    color: rgb(222, 222, 222);
  }
`;

const Shortcut = styled.div`
  display: flex;
`;
const ShortcutItem = styled.div`
  display: flex;
  color: inherit;
  padding: 0 1.5rem;
  border-left: 1px solid rgb(163, 163, 163);
  cursor: pointer;

  &:first-child {
    border-left: none;
  }
  &:last-child {
    padding-right: 0;
  }
`;

const Util = styled.ul`
  display: flex;
`;
const UtilItem = styled.li`
  margin-right: 1.667rem;
  &:hover {
    color: rgb(222, 222, 222);
  }
`;
const Copyright = styled.div`
  font-size: 1.083rem;
  color: rgb(110, 110, 110);

  > p {
    margin-bottom: 0.55rem;

    > span {
      position: relative;
      padding: 0 0.5rem 0 0.75rem;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 1px;
        height: 11px;
        margin-top: -5px;
        background-color: rgb(46, 46, 46);
      }

      &:first-child {
        padding-left: 0;
        &:before {
          width: 0;
        }
      }
    }
  }
`;
const SocialLink = styled.ul`
  display: flex;
  padding: 1.888rem 0 1.5rem;
  li {
    margin-left: 1rem;
    width: 3rem;
    height: 3rem;

    > svg {
      width: 100%;
      height: 100%;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <Info>
        <Col>
          <InfoTitle>공지사항</InfoTitle>
          <InfoContents>
            [안내] 개인정보처리방침 개정 안내 (2023년 1월 2일)
          </InfoContents>
        </Col>
        <Col>
          <Shortcut>
            <ShortcutItem>브랜드 바로가기 +</ShortcutItem>
            <ShortcutItem>그룹 계열사 바로가기 +</ShortcutItem>
          </Shortcut>
        </Col>
      </Info>
      <Col>
        <Util>
          <UtilItem>고객센터</UtilItem>
          <UtilItem>이용약관</UtilItem>
          <UtilItem>
            <strong>개인정보처리방침</strong>
          </UtilItem>
          <UtilItem>청소년 보호정책</UtilItem>
          <UtilItem>법적고지</UtilItem>
          <UtilItem>이벤트</UtilItem>
          <UtilItem>인재채용</UtilItem>
        </Util>
      </Col>
      <Copyright>
        <p>
          <span>대표이사 : YANG JIEUL</span>
          <span>사업자정보확인</span>
          <span>사업자등록번호 : 188-88-01893</span>
          <span>통신판매신고번호 : 2020-서울마포-3641호</span>
        </p>
        <p>
          <span>
            사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
          </span>
          <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
        </p>
        <p>
          <span>고객문의 바로가기</span>
          <span>대표메일 : tving@cj.net</span>
          <span>고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</span>
        </p>
        <p>
          <span>
            ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
          </span>
          <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
        </p>
        <SocialLink>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="css-o3xn5l esx4t663"
            >
              <g transform="translate(1.245 .684)">
                <rect
                  width="36"
                  height="36"
                  rx="18"
                  transform="translate(-1.245 -.684)"
                  fill="rgba(255,255,255,.13)"
                ></rect>
                <path
                  data-name="패\uC2A4 4579"
                  d="M27.379 11.832a2.8 2.8 0 00-1.978-1.978c-1.745-.468-8.743-.468-8.743-.468s-7 0-8.743.468a2.8 2.8 0 00-1.978 1.978 31.26 31.26 0 000 10.772 2.8 2.8 0 001.982 1.978c1.745.468 8.743.468 8.743.468s7 0 8.743-.468a2.8 2.8 0 001.978-1.978 31.263 31.263 0 000-10.772zm-12.96 8.743v-6.714l5.813 3.357z"
                  fill="rgba(255,255,255,.31)"
                ></path>
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="css-o3xn5l esx4t662"
            >
              <g
                id="share-instagram_svg__share_instagram"
                transform="translate(2.381 2.381)"
              >
                <rect
                  id="share-instagram_svg__frame"
                  width="36"
                  height="36"
                  rx="18"
                  transform="translate(-2.381 -2.381)"
                  fill="rgba(255,255,255,.13)"
                ></rect>
                <g
                  id="share-instagram_svg__\uADF8\uB8F9_5550"
                  data-name="\uADF8\uB8F9 5550"
                  transform="translate(4.678 4.679)"
                >
                  <path
                    id="share-instagram_svg__패\uC2A4_4587"
                    data-name="패\uC2A4 4587"
                    className="share-instagram_svg__cls-2"
                    fill="rgba(255,255,255,.31)"
                    d="M15.21 6.085c2.972 0 3.324.011 4.5.065a6.161 6.161 0 012.067.383 3.686 3.686 0 012.113 2.113 6.161 6.161 0 01.383 2.067c.054 1.174.065 1.526.065 4.5s-.011 3.324-.065 4.5a6.161 6.161 0 01-.383 2.067 3.686 3.686 0 01-2.113 2.113 6.161 6.161 0 01-2.067.383c-1.174.054-1.526.065-4.5.065s-3.324-.011-4.5-.065a6.161 6.161 0 01-2.067-.383A3.686 3.686 0 016.53 21.78a6.161 6.161 0 01-.383-2.067c-.054-1.174-.065-1.526-.065-4.5s.011-3.324.065-4.5a6.161 6.161 0 01.383-2.067 3.686 3.686 0 012.115-2.113 6.161 6.161 0 012.067-.383c1.174-.054 1.526-.065 4.5-.065m0-2.006c-3.023 0-3.4.013-4.589.067a8.17 8.17 0 00-2.7.517 5.692 5.692 0 00-3.26 3.256 8.17 8.17 0 00-.517 2.7c-.054 1.187-.067 1.566-.067 4.589s.013 3.4.067 4.589a8.17 8.17 0 00.517 2.7 5.692 5.692 0 003.255 3.255 8.17 8.17 0 002.7.517c1.187.054 1.566.067 4.589.067s3.4-.013 4.589-.067a8.17 8.17 0 002.7-.517 5.692 5.692 0 003.261-3.252 8.17 8.17 0 00.517-2.7c.054-1.187.067-1.566.067-4.589s-.013-3.4-.067-4.589a8.17 8.17 0 00-.517-2.7A5.692 5.692 0 0022.5 4.663a8.17 8.17 0 00-2.7-.517c-1.187-.054-1.566-.067-4.589-.067z"
                    transform="translate(-4.079 -4.079)"
                  ></path>
                  <path
                    id="share-instagram_svg__패\uC2A4_4588"
                    data-name="패\uC2A4 4588"
                    className="share-instagram_svg__cls-2"
                    fill="rgba(255,255,255,.31)"
                    d="M131.809 126.635a5.174 5.174 0 105.174 5.174 5.174 5.174 0 00-5.174-5.174zm0 8.533a3.359 3.359 0 113.359-3.359 3.359 3.359 0 01-3.359 3.359z"
                    transform="translate(-120.678 -120.678)"
                  ></path>
                  <circle
                    id="share-instagram_svg__타\uC6D0_393"
                    data-name="타\uC6D0 393"
                    className="share-instagram_svg__cls-2"
                    fill="rgba(255,255,255,.31)"
                    cx="1.469"
                    cy="1.469"
                    r="1.469"
                    transform="translate(15.522 3.801)"
                  ></circle>
                </g>
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="css-o3xn5l esx4t664"
            >
              <g transform="translate(2.125 2)">
                <rect
                  width="36"
                  height="36"
                  rx="18"
                  transform="translate(-2.125 -2)"
                  fill="rgba(255,255,255,.13)"
                ></rect>
                <path
                  data-name="패\uC2A4 1709"
                  d="M12.9 25.048a13 13 0 0013.089-13.091c0-.2 0-.4-.013-.594a9.311 9.311 0 002.294-2.382 9.232 9.232 0 01-2.64.724 4.627 4.627 0 002.023-2.545 9.277 9.277 0 01-2.922 1.118 4.6 4.6 0 00-7.958 3.145 4.687 4.687 0 00.118 1.05 13.071 13.071 0 01-9.483-4.807 4.6 4.6 0 001.426 6.141 4.567 4.567 0 01-2.085-.576v.059a4.6 4.6 0 003.69 4.51 4.6 4.6 0 01-1.211.162 4.547 4.547 0 01-.865-.085 4.607 4.607 0 004.3 3.2 9.289 9.289 0 01-6.811 1.9 13.011 13.011 0 007.052 2.068"
                  fill="rgba(255,255,255,.31)"
                ></path>
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="css-o3xn5l esx4t665"
            >
              <g transform="translate(1.245 .686)">
                <rect
                  width="36"
                  height="36"
                  rx="18"
                  transform="translate(-1.245 -.686)"
                  fill="rgba(255,255,255,.13)"
                ></rect>
                <path
                  data-name="패\uC2A4 1728"
                  d="M18.812 11.958v2.58h4.085l-.537 4.192h-3.548v10.21h-4.3V18.73h-3.439v-4.192h3.439v-3.654c0-6.234 8.384-4.514 8.384-4.514v3.654h-2.15a1.794 1.794 0 00-1.936 1.935"
                  fill="rgba(255,255,255,.31)"
                ></path>
              </g>
            </svg>
          </li>
        </SocialLink>
        <p>Copyright © 주식회사 티빙 All right reserved.</p>
      </Copyright>
    </FooterDiv>
  );
}

export default Footer;