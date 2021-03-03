import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <header>
          <h3>Andrew's Profile</h3>
        </header>
        <section>
          <h4>You have 24 days of gratitude</h4>
        </section>
        <section>
          <header>
            <h5>Your lastest gratitude entry</h5>
          </header>
          <h5>Day 24</h5>
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
        <button>New Day</button>
      </div>
    );
  }
}

export default User;
