import React from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";
const Navbar = (props) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(removeAuthedUser());
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="nav-elements">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leader Board</NavLink>
            </li>
            <li>
              <NavLink to="/new">New</NavLink>
            </li>
            <li className="right-navbar">
              <div className="user-info-nav">
                <div className="user-avatar">
                  <img
                    className="avatar-nav"
                    src={props.user.avatarURL}
                    alt=""
                  />
                </div>
                <span>{props.user.name},</span>
                <div className="logout-button" onClick={handleLogout}>
                  logout
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser],
});
export default connect(mapStateToProps)(Navbar);
