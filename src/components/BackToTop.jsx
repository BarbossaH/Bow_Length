import { Link, animateScroll as scroll } from 'react-scroll';
const BackToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 0 });
  };
  return (
    <Link to="top" smooth={true} spy={true} duration={500}>
      <div
        className="position-fixed bottom-0 end-0  p-3"
        // style={{ border: '1px solid red', width: '30px' }}
      >
        <div
          style={{
            backgroundColor: 'deepskyblue',
            borderRadius: '10px',
            textAlign: 'center',
            width: '50px',
            height: '50px',
            lineHeight: '50px',
          }}
          onClick={scrollToTop}
        >
          <i
            className="bi bi-rocket"
            style={{ fontSize: '30px', color: 'white' }}
          ></i>
        </div>
      </div>
    </Link>
  );
};
export default BackToTop;
