import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import User from "./components/User/User";
import NewDay from "./components/NewDay/NewDay";
import "./App.css";

class App extends Component {
  /*renderMainRoutes() {
    return (
      <>
        {["/", "/user/:userId"].map((path) => (
          <Route exact key={path} path={path} component={UserHome} />
        ))}
        <Route path="/landing" component={Landing} />
      </>
    );
  }
*/
  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/new-day" component={NewDay} />
        </main>
      </div>
    );
  }
}

export default App;
