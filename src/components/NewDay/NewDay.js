import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../Context";
import "./NewDay.css";

class NewDay extends Component {
  static contextType = Context;
  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2, text3 } = e.target;
    //create entry using auth token as validation
    AuthApiService.postDay({
      text1: text1.value,
      text2: text2.value,
      text3: text3.value,
    })
      .then((day) => {
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
      <>
        {days.length === 0 ? <h1>Day 1</h1> : <h1>Day {days.length + 1}</h1>}
        <h5>Write 3 things you are grateful for in the text boxes below</h5>

        <div className="new-day">
          <form
            className="new-day-form"
            id="new-day"
            onSubmit={this.handleSubmit}
          >
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
        </div>
      </>
    );
  }
}

export default NewDay;
