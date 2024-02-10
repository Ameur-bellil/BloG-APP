import "./TopBar.css";
import { Link } from "react-router-dom";
const TopBar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
        <i class="topIcon fa-brands fa-square-youtube"></i>
        <i class="topIcon fa-brands fa-linkedin"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2"
            alt=""
          />
        ) : (
          <>
            <ul className="topList">
              <li>
                <Link className="topListItem link " to="/login">
                  LOGIN
                </Link>
              </li>
              <li>
                <Link className="topListItem  link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}

        <i class=" topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
