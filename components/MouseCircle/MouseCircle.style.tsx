import styled from 'styled-components';

export const StyledMouseCircle = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  margin: -9px 0px 0px -9px;
  border-radius: 0%;
  background: cyan;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0);
  transition: width 0.5s, height 0.5s, margin 0.5s;
  overflow: hidden;
  z-index: 13;
  cursor: none;
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  & span {
    display: none;
  }

  &.big {
    width: 90px;
    height: 90px;
    margin: -3rem 0px 0px -3rem;
    cursor: pointer !important;
    z-index: 100;

    span {
      display: block;
      text-align: center;
      line-height: 90px;
      transition: display 0.5s;

      a {
        color: #1a2839;
        font-weight: 500;
        padding-top: 40px;
        padding-bottom: 40px;
        text-decoration: none;
        font-size: 12px;
      }
    }
  }
`;
