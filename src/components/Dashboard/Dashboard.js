import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = Context;

  render() {
    const { days = [] } = this.context;

    return (
      <>
        {days.length === 0 ? <h3>Welcome</h3> : <h3>Welcome Back!</h3>}

        <section>
          {days.length === 0 ? (
            <h5 className="start">Start your gratitude journal today!</h5>
          ) : (
            <h5 className="length">You have {days.length} gratitude entries</h5>
          )}
        </section>
        <section>
          {days.length === 0 ? (
            <>
              <Link to="/new-day">Add your first day!</Link>
            </>
          ) : (
            <>
              <ul className="ul-days">
                {days.reverse().map((day, indx) => (
                  <>
                    <h6 className="date">
                      {new Date(day.date_created).toLocaleDateString()}
                    </h6>
                    <li key={indx} className="li-days">
                      <p>1. {day.text1}</p>
                      <p>2. {day.text2}</p>
                      <p>3. {day.text3}</p>
                    </li>
                  </>
                ))}
              </ul>
              <Link to="/new-day">Add a New Entry</Link>
            </>
          )}
        </section>
      </>
    );
  }
}

export default Dashboard;
