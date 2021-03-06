import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import AuthAPIService from "../../services/auth-api-service";

class Dashboard extends Component {
  static contextType = Context;
  componentDidMount() {
    AuthAPIService.getDay()
      .then((days) => {
        this.context.setDays(days);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  }

  render() {
    // access all days that have been recieved from api and stored into context
    const { days = [] } = this.context;

    return (
      <>
        {days.length === 0 ? <h1>Welcome</h1> : <h1>Your Gratitude Journal</h1>}
        {/* if no days in context prompt user to start journal else show # of journal entries */}

        {days.length === 0 ? (
          <h5 className="start">Start your gratitude journal today!</h5>
        ) : (
          <h5 className="length">You have {days.length} gratitude entries</h5>
        )}

        {/* if no days prompt sure with add first entry button else show all of user day entries */}

        {days.length === 0 ? (
          <div className="button-container-add-new">
            <Link to="/new-day">
              <button className="button-add-new-entry">
                Add Your First Entry
              </button>
            </Link>
          </div>
        ) : (
          <div className="dashboard-entry-container">
            <ul className="ul-days">
              {days
                .sort((a, b) => b.id - a.id)
                .map((day, indx) => (
                  <li key={indx} className="li-days">
                    <h4 className="date">
                      {new Date(day.date_created).toLocaleDateString()}
                    </h4>
                    <p>1. {day.text1}</p>
                    <p>2. {day.text2}</p>
                    <p>3. {day.text3}</p>
                  </li>
                ))}
            </ul>
            <div className="button-container-add-new">
              <Link to="/new-day">
                <button className="button-add-new-entry">Add New Entry</button>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Dashboard;
