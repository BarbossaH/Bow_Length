import { useState } from 'react';
import Dropdown from './Dropdown';
import menuData from '../../../Data/nav_content.json';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="row d-flex justify-content-center "
      style={{ padding: '20px' }}
    >
      <div
        className="col-lg-2 d-flex justify-content-center align-items-center "
        // style={{ border: '1px red solid' }}
      >
        <img className="img-fluid" src="images/logo.png" alt="logo" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light col-lg-10 menu-text menu-bg-color">
        <div className="container-fluid ">
          <a className="navbar-brand menu menu-color" href="#">
            Menu
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span
              className={
                isOpen
                  ? 'bi bi-caret-down-square menu-color'
                  : 'bi bi-caret-left-square menu-color'
              }
              style={{ fontSize: '36px' }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {menuData.menu.map((i) => {
                return <Dropdown key={i.id} id={i.id} content={i.Content} />;
              })}

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default HeaderNav;
