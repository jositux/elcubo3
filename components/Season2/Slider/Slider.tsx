import React, { useState, useEffect, Fragment } from 'react';
import Slider from "react-slick";
import styles from './season2.slider.module.scss';
import useInteractive from '../../../hooks/useInteractive';

const CustomSlider = ({ slides }) => {

  const { showImage } = useInteractive();

  const mobileConfig = {
    className: styles.Center,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    draggable: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  const desktopConfig = {
    className: styles.Center,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    draggable: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  const filteredSlides = slides.filter(slide => slide.rel === true || showImage(slide.rel));

  return (
    <Fragment>
      <div className={`${styles.Container} d-mobile`}>
        <Slider {...mobileConfig}>
          {filteredSlides && filteredSlides.map((slide, index) => (
            <img key={`slider_${index}`} className={styles.Img} src={slide.image} />
          ))}
        </Slider>
      </div>
      <div className={`${styles.Container} d-desktop`}>
        <Slider {...desktopConfig}>
          {filteredSlides && filteredSlides.map((slide, index) => (
            <img key={`slider_${index}`} className={styles.Img} src={slide.image} />
          ))}
        </Slider>
      </div>
    </Fragment>
  );
}

export default CustomSlider;