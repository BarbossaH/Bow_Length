const Dropdown = ({ id, content }) => {
  console.log(content);
  content.map((i) => console.log(i));
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {id}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {content.map((i) => (
            <li
              key={i}
              style={{
                paddingTop: '10px',
                fontSize: '18px',
              }}
            >
              <a className="dropdown-item" href="#">
                <h6 className="dropdown-h6">{i}</h6>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
export default Dropdown;
// {
//   /* <li>
//     <hr className="dropdown-divider" />
//   </li> */
// }
