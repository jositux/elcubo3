import styled from 'styled-components';

export const ListChronoCover = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-family: 'Inter';
  z-index: 2;

  h2 {
    color: white;
    font-family: 'Inter';
    font-size: 20px;
    margin: 0;
    text-align: right;
  }

  h3 {
    color: white;
    font-family: 'Inter';
    font-size: 17px;
    margin: 0;
    text-align: right;
    font-weight: 300;
  }

  ul {
    list-style-type: none;
    margin: 0;
    margin-top: 20px;
  }

  ul li {
    line-height: 2;
  }

  ul a img {
    width: 170px;
    border-radius: 8px;
    position: absolute;
    left: -190px;
    top: -35px;
    z-index: 2;
    opacity: 0;
    transition: 0.2s;
  }

  .line-right {
    position: absolute;
    height: 100%;
    width: 1px;
    right: 4px;
    top: 40px;
    opacity: 0.4;
  }

  /* Menu Cronologia */

  .list-chrono-cover {
    position: absolute;
    right: 100px;
    top: 220px;
    color: white;
    font-family: 'Inter';
  }

  .list-chrono-cover h2 {
    font-size: 20px;
    margin: 0;
    text-align: right;
  }

  .list-chrono-cover h3 {
    font-size: 17px;
    margin: 0;
    text-align: right;
    font-weight: 300;
  }

  ul.list-chrono {
    list-style-type: none;
    margin: 0;
    margin-top: 20px;
  }

  ul.list-chrono li {
    line-height: 1.5;
    font-size: 15px;
    text-align: right;
  }

  ul.list-chrono a img {
    width: 170px;
    border-radius: 8px;
    position: absolute;
    left: -190px;
    top: -35px;
    z-index: 2;
    opacity: 0;
    transition: 0.2s;
  }

  ul.list-chrono a {
    color: #45b4c1;
    text-decoration: none;
    position: relative;
    font-weight: 500;
  }

  ul.list-chrono a span {
    position: relative;
    z-index: 5;
    transition: 0.2s;
  }

  ul.list-chrono a:hover img {
    transition: 0.2s;
    opacity: 1;
  }

  ul.list-chrono a:hover,
  ul.list-chrono a.active {
    color: white;
  }

  ul.list-chrono a.viewed {
    color: white;
  }

  ul.list-chrono a img:hover {
    opacity: 0;
  }

  ul.list-chrono a span.circle {
    width: 10px;
    height: 10px;
    float: right;
    margin-left: 30px;
    margin-top: 8px;
    border-radius: 50%;
    background: #45b4c1;
  }

  ul.list-chrono a:hover span.circle,
  ul.list-chrono a.active span.circle {
    background: white;
  }

  ul.list-chrono.height-big li {
    line-height: 6;
  }

  ul.list-chrono.height-big li span.circle {
    margin-top: 42px;
  }

  ul.list-chrono.height-medium li {
    line-height: 4;
  }

  ul.list-chrono.height-medium li span.circle {
    margin-top: 26px;
  }

  @media screen and (max-height: 700px) {
    ul.list-chrono.marina {
      margin-top: 5px;
    }

    ul.list-chrono.marina li {
      line-height: 1.5;
      font-size: 12px;
      text-align: right;
    }

    ul.list-chrono.marina a span.circle {
      margin-top: 6px;
    }
  }
`;
