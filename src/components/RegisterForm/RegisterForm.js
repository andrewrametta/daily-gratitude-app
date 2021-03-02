import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h3>Register Now</h3>
          </header>
          <form className="register-form">
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Register</button>
          </form>
        </section>
      </div>
    );
  }
}

export default RegisterForm;
