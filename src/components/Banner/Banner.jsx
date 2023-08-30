import { useEffect, useState } from 'react';
import banner from '../../Data/banner_page.json';
const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => {
        setFadeIn(false);
        const timeout = setTimeout(() => {
          setImageIndex((preIndex) => (preIndex + 1) % banner.banner.length);
          setFadeIn(true);
        }, 300);
      },
      5000 //5second
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="container-fluid">
      <div
        style={{
          position: 'relative',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <img
          className="img-fluid"
          src={banner.banner[imageIndex].fileName}
          // src="images/services/services-1.jpg"
          alt=""
        />
        <div
          className="d-flex flex-column"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            color: 'white',
            padding: '30px',
            userSelect: 'none',
          }}
        >
          <div className="banner-title" style={{ width: '50%' }}>
            {banner.banner[imageIndex].title}
          </div>
          <h6> {banner.banner[imageIndex].content}</h6>
          <div className="btn  btn-primary1">View Details</div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
