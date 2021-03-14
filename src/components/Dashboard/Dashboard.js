import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  static contextType = Context;

  render() {
    const { days = [] } = this.context;
    return (
      <div>
        <header>
          {days.length === 0 ? <h3>Welcome</h3> : <h3>Welcome Back!</h3>}
        </header>
        <section>
          {days.length === 0 ? (
            <h5>Start your Gratitude Journal Today!</h5>
          ) : (
            <h4>You have {days.length} days of gratitude</h4>
          )}
        </section>
        <section>
          {days.length === 0 ? (
            <>
              <Link to="/new-day">Add your first day!</Link>
            </>
          ) : (
            <>
              <ul>
                <h5>Your lastest gratitude entry</h5>
                {days.map((day, indx) => (
                  <li key={indx}>
                    <h6>{day.date_created}</h6>
                    <p>{day.text1}</p>
                    <p>{day.text2}</p>
                    <p>{day.text3}</p>
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
