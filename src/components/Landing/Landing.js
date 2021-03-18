import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h3>One Simple App could change your whole outlook on life</h3>
          </header>
          <p>
            Harvard Researcher Shawn Achor says, "Something as simple as writing
            down three things your are grateful for every day for 21 days in a
            row significantly increases your level of optimism, and it holds for
            the next six months." We are in some of the most difficult times in
            modern history. We are living in a pandemic. Our country is more
            divided than it has ever been in recent years. People are suffering
            from anxiety and depression at higher levels than ever documented
            before.
          </p>
        </section>
        <section>
          <header>
            <h3>How does Daily Gratitude work?</h3>
          </header>
          <p>
            This app is simple and yet could change someone's life. Daily
            Gratitude is a place to practice gratitude. A user can sign up and
            create a profile and then start a gratitude journal. Each day the
            user can create a new journal entry. When you sign in you can
            reflect on your journal in the dashboard.
          </p>
        </section>
        <section>
          <header>
            <h3>Want to test out Daily Gratitude?</h3>
          </header>
          <p>
            We have set up a demo account so that you can test the app out and
            see if you want to register. All you have to do is click the Demo
            link below and you will land on the login page. The username and
            password will be auto filled for you, just click login and enjoy the
            app. Feel free to leave an entry if you would like. Enjoy!
          </p>
          <Link to="/login">Demo</Link>
        </section>
        <section>
          <Link to="/register">Register Today</Link>
        </section>
      </div>
    );
  }
}

export default Landing;
