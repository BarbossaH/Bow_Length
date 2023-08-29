export const HeaderContact = () => {
  return (
    <div className="contact row p-3">
      <div
        // style={{ border: '1px solid green' }}
        className="row col-md-10 d-flex justify-content-between"
      >
        <span
          // style={{ border: '1px solid red' }}
          className="bi bi-house-door-fill text-white col-lg-5 col-md-6"
        >
          &nbsp; Level 3, 60 Cook Street, Auckland
        </span>
        <a
          // style={{ border: '1px solid red' }}
          className="col-lg-3 col-md-6 icon-text-container"
        >
          <span className="bi bi-telephone-fill">&nbsp;0800 780 907</span>
        </a>
        <a
          // style={{ border: '1px solid red' }}
          className="col-xl-3 col-lg-4 col-md-6"
        >
          <span className="bi bi-envelope-fill">
            &nbsp;hqproperty@outlook.co.nz
          </span>
        </a>
      </div>
      <div
        // style={{ border: '1px solid red' }}
        className="col-md-2 text-center d-flex justify-content-evenly"
      >
        <a href="">
          <span className="bi bi-facebook"></span>
        </a>
        <a href="">
          <span className="bi bi-twitter"></span>
        </a>
        <a href="">
          <span className="bi bi-instagram"></span>
        </a>
      </div>
    </div>
  );
};
