import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const TokenService = {
  hasAuthToken: () => false,
};

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/">Daily Gratitude</Link>
        </h1>
        <div className="meun-icon"></div>
        <ul>
          {MenuItems.map((item, indx) => {
            return (
              <li key={indx}>
                <NavLink className="navLinks" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          {TokenService.hasAuthToken() ? (
            <>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/new-day">New Day</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
