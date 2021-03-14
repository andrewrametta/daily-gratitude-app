import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../Context";

class NewDay extends Component {
  static contextType = Context;
  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2, text3 } = e.target;
    AuthApiService.postDay({
      text1: text1.value,
      text2: text2.value,
      text3: text3.value,
    })
      .then((day) => {
        console.log(day);
        this.context.addNewDay(day);
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { days = [] } = this.context;
    return (
      <div>
        <header>
          {days.length === 0 ? <h4>Day 1</h4> : <h4>Day {days.length + 1}</h4>}
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
            </section>
          </form>
        </section>
      </div>
    );
  }
}

export default NewDay;
