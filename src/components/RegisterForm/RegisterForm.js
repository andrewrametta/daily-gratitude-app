import React, { Component } from "react";
import AuthAPIService from "../../services/auth-api-service";
import "./RegisterForm.css";

class Register extends Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = e.target;
    this.setState({ error: null });
    if (password.value === confirmPassword.value) {
      AuthAPIService.postUser({
        username: username.value,
        password: password.value,
      })
        .then((user) => {
          this.props.history.push("/login");
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    } else {
      alert("Passwords do not match");
    }
  };

  render() {
    return (
      <div>
        <section>
          <h3>Register Now</h3>

          <form className="register-form" onSubmit={this.handleSubmit}>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <div>
              <label htmlFor="username">Username </label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password </label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
              />
            </div>
            <p className="password-directions">
              Password must be at least 8 characters and include a number, a
              capital letter, and a special character
            </p>
            <button type="submit">Register</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Register;
