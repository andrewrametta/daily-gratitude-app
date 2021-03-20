import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/RegisterForm/RegisterForm";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NewDay from "./components/NewDay/NewDay";
import Context from "../src/Context";
import "./App.css";

class App extends Component {
  state = {
    days: [],
    setDays: (days) => this.setState({ days }),
    addNewDay: (day) => this.setState({ days: [...this.state.days, day] }),
  };

  render() {
    return (
      <div className="container">
        <Context.Provider value={this.state}>
          <header>
            <Route path="/" component={Navbar} />
          </header>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new-day" component={NewDay} />
          </main>

          <footer>Built by Andrew Rametta</footer>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
