import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";

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
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
