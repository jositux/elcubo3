import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .back-to-season {
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: 10;
    opacity: 1;
    transition: all 0.3s ease;
    will-change: opacity;
    outline: none;

    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 10px;
    display: flex;
    align-items: center;

    & span {
      color: white;
      margin-left: 5px;
      opacity: 0;
      transition: opacity 0.5s ease;
      will-change: opacity;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  &.in-fullscreen {
    .back-to-season {
      top: 30px;
    }
  }

  .plyr--video {
    overflow: hidden !important;

    &.plyr--hide-controls {
      .plyr__extra_controls {
        opacity: 0;
      }
    }

    .plyr__control[data-plyr='chapters'] {
      display: none;
    }
  }

  .plyr--full-ui input[type='range'] {
    color: #45b4c1;
  }

  .plyr__control--overlaid {
    background: rgba(69, 180, 193, 0.5);
  }

  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded='true'] {
    background: #45b4c1;
  }

  .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(#45b4c1, 0.5);
  }

  .plyr__menu__container .plyr__control[role='menuitemradio'][aria-checked='true']::before {
    background: #45b4c1;
  }

  .plyr__portal__title {
    color: white;
    font-family: Inter;
    font-size: 2.3rem;
    letter-spacing: -1px;
    font-weight: 500;
    position: absolute;
    left: 20px;
    top: 10vh;
    z-index: 100;
  }

  .plyr {
    height: 100vh;
  }

  .interactiveVideo .plyr {
    height: calc(100vh - 50px);
  }

.plyr video {
    object-fit: cover;
}

.plyr__video-wrapper {
    height: auto !important;
}

/* Hide cursor */
.plyr--hide-controls {
  cursor:none !important;
}

`;
