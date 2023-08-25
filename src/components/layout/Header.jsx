import { TiHome } from 'react-icons/ti';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="text-center">
      <div
        className="contact row"
        style={{ padding: '12px', paddingLeft: '28px' }}
      >
        <div className="row col-lg-9 d-flex justify-content-between">
          <span
            className="col-lg-5 icon-text-container"
            style={{ color: 'white' }}
          >
            {<TiHome className="icon" />}
            <span className="text">Level 3, 60 Cook Street, Auckland</span>
          </span>
          <a
            className="col-lg-3 icon-text-container"
            style={{ color: 'white' }}
          >
            {<BsTelephoneFill className="icon" />}
            <span className="text">0800 780 907</span>
          </a>
          <a
            className="col-lg-3 icon-text-container"
            style={{ color: 'white' }}
          >
            {<MdEmail className="icon" />}
            <span className="text">hqproperty@outlook.co.nz</span>
          </a>
        </div>
        <div className="col-lg-3" style={{ color: 'white' }}>
          {<FaFacebook className="icon" />}{' '}
          {<AiFillTwitterCircle className="icon" />}{' '}
          {<AiFillInstagram className="icon" />}{' '}
          {<FaFacebookMessenger className="icon" />}
        </div>
      </div>
      <div className="row" style={{ padding: '30px', paddingLeft: '60px' }}>
        <div className="col-md-3 ">
          <img src="images/logo.png" alt="logo" style={{ width: '100%' }} />
        </div>
        <div className="col-md-7">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Menu
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                </ul>
                {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-2 appointment">
          <button className="btn btn-outline-success" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
