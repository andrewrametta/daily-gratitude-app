import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <>
        <p className="quote">
          "Something as simple as writing down three things you are grateful for
          every day for 21 days in a row significantly increases your level of
          optimism, and it holds for the next six months." -- Shawn Achor
        </p>
        <div className="landing-container">
          <div className="landing-item">
            <img
              className="landing-img"
              src="/mountain.jpg"
              alt="Daily Gratitude"
            />
            <section className="landing-section">
              <h3 className="card">Change your outlook</h3>
              <p>
                We are in some of the most difficult times in modern history.
                People are suffering from anxiety and depression at higher
                levels than ever documented before.
              </p>
            </section>
          </div>
          <div className="landing-item">
            <img
              className="landing-img"
              src="/gothis.jpg"
              alt="Daily Gratitude"
            />
            <section className="landing-section">
              <h3 className="card">How does it work?</h3>

              <p>
                You can sign up and create a profile and then start your own
                gratitude journal. Each day you can create a new entry. There is
                also a dashboard page to view your entire journal.
              </p>
            </section>
          </div>
          <div className="landing-item">
            <img
              className="landing-img"
              src="/yoga.jpg"
              alt="Daily Gratitude"
            />
            <section className="landing-section">
              <h3 className="card">Want to test it out?</h3>

              <p>
                We have set up a demo account so that you can test the app.
                Click the Demo link below and you will land on the login page.
                Everything will be auto filled for you, just click login and
                enjoy!
              </p>
            </section>
          </div>
        </div>
        <div className="button-container">
          <Link to="/login">
            <button className="button-demo">Demo</button>
          </Link>

          <Link to="/register">
            <button className="button-register">Register</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Landing;
