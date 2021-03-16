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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
            elit vitae pulvinar ultrices. Nulla ullamcorper velit eget ex semper
            fermentum. Sed mattis dolor nec massa congue, at tristique nisl
            gravida. Duis elementum porttitor risus id varius. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur congue eget neque id ornare. Praesent elit
            augue, lacinia eget ante bibendum, euismod lacinia tortor. Sed sit
            amet blandit est. Maecenas non condimentum odio, vel vulputate nunc.
            Phasellus dapibus ultrices sapien a condimentum. Donec eu tellus ac
            mi molestie commodo ut a sem. Phasellus elementum quis odio et
            lacinia. Proin varius massa ac eros gravida malesuada. Maecenas eget
            ex et eros laoreet ornare id et nulla. Ut quis tortor sed justo
            pellentesque hendrerit in in sem. Aenean euismod quis neque in
            sodales.
          </p>
        </section>
        <section>
          <header>
            <h3>How does Daily Gratitude work?</h3>
          </header>
          <p>
            Vestibulum fermentum sagittis nunc, in consectetur arcu varius sed.
            Nulla fermentum sapien tristique, consequat velit id, scelerisque
            turpis. Pellentesque hendrerit porttitor dignissim. Integer vitae
            metus accumsan, auctor velit in, finibus tellus. Sed mollis ex ex,
            sed elementum dui finibus nec. Fusce dapibus eget ante ac posuere.
            Nam in condimentum nunc. Pellentesque quis lacinia sapien, vel
            cursus dui. Aliquam bibendum nisi mauris, egestas hendrerit arcu
            elementum sed. Sed a nunc quam. Morbi quis urna sit amet lacus
            elementum volutpat. Nunc auctor, velit in efficitur sagittis, lacus
            ante bibendum tortor, a ultricies tortor leo at turpis. Ut et tellus
            sollicitudin nunc facilisis volutpat. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
            malesuada rhoncus consequat.
          </p>
        </section>
        <section>
          <header>
            <h3>What are you waiting for?</h3>
          </header>
          <p>
            Mauris suscipit vel velit a maximus. Proin quis volutpat nisi. Nam
            congue, massa nec vehicula viverra, est magna rhoncus enim, ut
            mattis eros ex consectetur risus. Phasellus ornare purus ac lacinia
            tempus. Curabitur pulvinar mi in sapien egestas, sit amet facilisis
            elit semper. Donec aliquet nisi dui, sit amet tempus ligula pretium
            sed. In id ligula eu purus commodo iaculis blandit eu elit. Fusce
            eleifend purus id metus congue hendrerit. Cras eget dolor id sapien
            interdum vestibulum. Maecenas tristique convallis dui.
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
