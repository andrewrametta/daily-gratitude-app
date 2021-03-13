import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <header>
          <h3>Welcome Back!</h3>
        </header>
        <section>
          {this.context.days.length === 0 ? (
            <h5>Start your Gratitude Journal Today!</h5>
          ) : (
            <h4>You have {this.context.days.length} days of gratitude</h4>
          )}
        </section>
        <section>
          {this.context.days.length === 0 ? (
            <>
              <Link to="/new-day">Add your first day!</Link>
            </>
          ) : (
            <>
              <ul>
                <h5>Your lastest gratitude entry</h5>
                {this.context.days[this.context.days.length - 1]}
                {this.context.days.map((day, indx) => (
                  <li>
                    <h6>Day {this.context.day.indx}</h6>
                    <p>{this.context.day.date_created}</p>
                    <p>{this.context.day.text1}</p>
                    <p>{this.context.day.text2}</p>
                    <p>{this.context.day.text3}</p>
                  </li>
                ))}
              </ul>
              <Link to="/new-day">New Day</Link>
            </>
          )}
        </section>
      </div>
    );
  }
}

export default Dashboard;
