'use client';
import styles from './carousel.module.scss';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { TCarousel } from './carouselType';

function Carousel({ imgs }: TCarousel) {
  const slickRef = useRef<Slider | null>(null);
  const previous = () => slickRef.current?.slickPrev();
  const next = () => slickRef.current?.slickNext();
  const [currentImage, setCurrentImage] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(imgs.length);
  return (
    <div className={styles.carousel}>
      <Slider {...settings} ref={slickRef}>
        {imgs.map((item: string, index: number) => (
          <div key={index}>
            <img src={item} alt="Slide" className={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      <div
        onClick={() => {
          previous();
          setCurrentImage((prev) => prev - 1);
        }}>
        {currentImage !== 0 && <GrPrevious className={styles.prevButton} />}
      </div>
      <div
        onClick={() => {
          next();
          setCurrentImage((prev) => prev + 1);
        }}>
        {currentImage !== imgs.length - 1 && (
          <GrNext className={styles.nextButton} />
        )}
      </div>
    </div>
  );
}
export default Carousel;
