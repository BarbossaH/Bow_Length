import { useState } from 'react';
import CardImage from './CardImage';

const WebCarousel = () => {
  const [mouseIn, setMouseIn] = useState(false);
  return (
    <div
      className="row "
      style={{ border: '1px solid red', overflow: 'hidden' }}
    >
      <h5>Our Products</h5>
      <h1>Mainstream Products</h1>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          border: '1px solid red',
          position: 'relative',
          height: '400px',
        }}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        {mouseIn && (
          <>
            <button className="position-absolute start-0 translate-middle-y">
              &lt;
            </button>
            <button className="position-absolute end-0 translate-middle-y">
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default WebCarousel;
