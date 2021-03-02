import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Daily Gratitude</h1>
        <div className="meun-icon"></div>
        <ul>
          {MenuItems.map((item, indx) => {
            return (
              <li key={indx}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
