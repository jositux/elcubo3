import styled from 'styled-components';

export const FooterWrapper = styled.div`
@media (min-width: 1024px) {
  .dMRiTC {
    width: 49%;
    position: relative;
  }

  .dMRiTC::after {
    content: " ";
    height: 54px;
    border-right: 1px solid rgba(180, 180, 180, 0.5);
    right: 0px;
    position: absolute;
    top: 33%;
  }

  .lmsxaq {
      margin: 0px 0px 10px;
  }
  
  .gwLyLi {
    margin: 0px !important;
  }

}

.lmsxaq {
    line-height: 1.25rem;
    color: rgb(255, 255, 255);
    font-family: Dosis, sans-serif;
    font-size: 1.25em;
    font-weight: 300;
    width: 100%;
    margin: 0px 0px 10px;
}

.gwLyLi {
  margin: 0px 15px;
  padding: 0px;
  height: 40px;
  list-style: none;
  display: flex;
  width: 100%;
}

.hntsVm {
  max-width: 131px;
  margin: 0px 20px 0px 0px;
}

.hntsVm img {
  width: 100%;
}

`;
