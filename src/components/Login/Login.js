import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthAPIService from "../../services/auth-api-service";
import config from "../../config";

class LoginForm extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const user = { username: username.value, password: password.value };
    AuthAPIService.loginUser(user).then((loginResponse) => {
      TokenService.saveAuthToken(loginResponse.authToken);
      this.props.history.push("/user");
    });
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
                defaultValue="demoUser"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                defaultValue="P@ssword1234"
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
