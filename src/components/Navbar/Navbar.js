import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import TokenService from "../../services/token-service";
import Context from "../../Context";
import "./Navbar.css";

class Navbar extends Component {
  static contextType = Context;

  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          <img className="logo-image" src="/logo.svg" alt="Daily Gratitude" />
        </Link>
        <ul className="hamburger">
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
        <ul className="nav">
          {TokenService.hasAuthToken() ? (
            <>
              <li className="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <NavLink to="/new-day">Add New Entry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" onClick={this.logout}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
