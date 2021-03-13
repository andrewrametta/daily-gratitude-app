import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";

class NewDay extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2, text3 } = e.target;
    AuthApiService.postDay({
      text1: text1.value,
      text2: text2.value,
      text3: text3.value,
    })
      .then((day) => {
        this.context.addDay(day);
        this.props.history.push("/user");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  // fetch post
  render() {
    return (
      <div>
        <header>
          <h3>Day 25</h3>
          <h5>Write 3 things you are grateful for in the text boxes below</h5>
        </header>
        <section>
          <form id="new-day" onSubmit={this.handleSubmit}>
            <section className="form-section overview-section">
              <label htmlFor="text1"></label>
              <textarea name="text1" rows="4" required></textarea>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="text2"></label>
              <textarea name="text2" rows="4" required></textarea>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="text3"></label>
              <textarea name="text3" rows="4" required></textarea>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </div>
    );
  }
}

export default NewDay;
