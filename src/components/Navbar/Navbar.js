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
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/">Daily Gratitude</Link>
        </h1>
        <div className="meun-icon"></div>
        <ul>
          {/*MenuItems.map((item, indx) => {
            return (
              <li key={indx}>
                <NavLink className="navLinks" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            );
            //add about here, currently this is set up to show all routes
            //change this to show about always, and everything else should be good
            // may decide to get rid of about and just have landing and about be one page that has a link of Daily Gratitude
          })*/}

          {TokenService.hasAuthToken() ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <NavLink className="navLinks" to="/new-day">
                  New Day
                </NavLink>
              </li>
              <li>
                <NavLink className="navLinks" to="/" onClick={this.logout}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="navLinks" to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className="navLinks" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
