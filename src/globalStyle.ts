import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
strong {
  font-weight: bold;
}
  html {
    &.hide-scrollbar {
      overflow: scroll;
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
      &.is-laptop {
        font-size: calc(6px + 0.5vw);
      }
    }
    @media screen and (min-width: 768px) {
      font-size: 1.2vw;
      &.is-laptop {
        font-size: calc(6px + 0.5vw);
      }
    }
    @media screen and (min-width: 768px) and (orientation: portrait) {
      font-size: 1.5vw;
      &.is-laptop {
        font-size: calc(6px + 0.5vw);
      }
    }
    @media screen and (min-width: 1200px) {
      font-size: 1vw;
      &.is-laptop {
        font-size: calc(6px + 0.5vw);
      }
    }
    @media screen and (min-width: 2000px) {
      font-size: 16px;
      &.is-laptop {
        font-size: 16px;
      }
    }
    @media screen and (min-width: 2400px) {
      font-size: 18px;
      &.is-laptop {
        font-size: 18px;
      }
    }
  }
  body {
    font-weight: 400;
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: ${(props) => props.theme.palette.common.black};
    color: ${(props) => props.theme.palette.common.white};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
  border:0;
    background-color: transparent;
    padding:0;
    margin:0;
    vertical-align:middle;
  }
  
  .swiper-pagination {
    position: absolute;
    bottom: 20%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 100;
    top: auto;
    right: auto;
    text-align: left;
    margin-left: 1.666rem;
    left: 1.333rem;
  }
  .swiper-slide img {
    width: 100%;
  }
`;

export default GlobalStyle;