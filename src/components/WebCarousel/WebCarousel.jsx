import { useRef, useState } from 'react';
import CardImage from './CardImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { carousel } from '../../Data/carousel.json';
const WebCarousel = () => {
  const sliderRef = useRef();
  const [mouseIn, setMouseIn] = useState(false);
  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // 切换到上一张幻灯片
    }
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>, // 隐藏左侧按钮
    nextArrow: <></>, // 隐藏右侧按钮
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="position-relative"
      style={{ width: '95%', margin: '0 auto' }}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <h1>1234</h1>
      <Slider {...settings} ref={sliderRef}>
        {carousel.map((i) => {
          return <CardImage key={i.id} imageName={i.fileName} />;
        })}
      </Slider>
      {mouseIn && (
        <>
          <button
            className="btn btn-primary position-absolute top-50"
            style={{ left: '-30px' }}
            onClick={handlePrevClick}
          >
            <span className="bi bi-arrow-left-circle"></span>
          </button>
          <button
            className="btn btn-primary position-absolute top-50"
            style={{ right: '-30px' }}
            onClick={handleNextClick}
          >
            <span className="bi bi-arrow-right-circle"></span>
          </button>
        </>
      )}
    </div>
  );
};
export default WebCarousel;
