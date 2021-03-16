import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthAPIService from "../../services/auth-api-service";
import Context from "../../Context";

class LoginForm extends Component {
  state = {
    error: null,
  };
  static contextType = Context;

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const user = { username: username.value, password: password.value };
    this.setState({ error: null });
    console.log("before login");
    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        console.log("before authToken");
        TokenService.saveAuthToken(loginResponse.authToken);
        AuthAPIService.getDay().then((days) => {
          this.context.setDays(days);
        });
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
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
            {this.state.error && <p className="error">{this.state.error}</p>}
            <div>
              <label htmlFor="username">Username </label>
              <input
                type="text"
                name="username"
                id="username"
                defaultValue="DemoUser"
              />
            </div>
            <div>
              <label htmlFor="password">Password </label>
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
