'use client';
import styles from './carousel.module.scss';
import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { TCarousel } from './carouselType';

function Carousel({ imgs }: TCarousel) {
  const slickRef = useRef<Slider | null>(null);
  const previous = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings} ref={slickRef}>
        {imgs.map((item : string, index : number) => (
          <div key={index}>
            <img src={item} alt="Slide" className={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      <div onClick={previous}>
        <GrPrevious className={styles.prevButton} />
      </div>
      <div onClick={next}>
        <GrNext className={styles.nextButton} />
      </div>
    </div>
  );
}
export default Carousel;
