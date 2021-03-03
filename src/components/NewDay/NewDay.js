import React, { Component } from "react";

class NewDay extends Component {
  render() {
    return (
      <div>
        <header>
          <h3>Day 25</h3>
          <h5>Write 3 things you are grateful for in the text boxes below</h5>
        </header>
        <section>
          <form id="new-day">
            <section className="form-section overview-section">
              <label htmlFor="day-summary"></label>
              <textarea name="day-summary" rows="4" required></textarea>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="day-summary"></label>
              <textarea name="day-summary" rows="4" required></textarea>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="day-summary"></label>
              <textarea name="day-summary" rows="4" required></textarea>
            </section>

            <section className="button-section">
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
