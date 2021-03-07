import React, { Component } from "react";
import TokenService from "../../services/token-service";
import config from "../../config";

class LoginForm extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const newUser = { username: username.value, password: password.value };
    /*fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/user");
      })
      .catch((err) => console.error(err));*/
    TokenService.saveAuthToken("shajksd798dsahbHJhs8");
    this.props.history.push("/user");
  };

  render() {
    return (
      <div>
        <section>
          <header>
            <h3>Login</h3>
          </header>
          <form className="Login-form" onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value="demoUser"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value="P@ssword1234"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    );
  }
}

export default LoginForm;
