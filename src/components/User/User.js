import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

class User extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <header>
          <h3>{this.context.username}'s Profile</h3>
        </header>
        <section>
          <h4>You have {this.context.days.length} days of gratitude</h4>
        </section>
        <section>
          <header>
            <h5>Your lastest gratitude entry</h5>
            {this.context.days[this.context.days.length - 1]}
          </header>
          <h5>Day {this.context.days.length}</h5>
          <p>
            Phasellus non rutrum nisl, quis tincidunt nulla. Praesent ac augue
            purus.
          </p>
          <p>
            Duis pellentesque, enim eget molestie eleifend, lectus purus
            condimentum dolor, eget pharetra augue sem.
          </p>
          <p>
            Phasellus non rutrum nisl, quis tincidunt nulla. Praesent ac augue
            purus.
          </p>
        </section>

        <Link to="/new-day">New Day</Link>
      </div>
    );
  }
}

export default User;
