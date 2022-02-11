import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://github.com/bhavrish"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/bhavesh-shah-16a34b16b/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.youtube.com/channel/UC_zvGSOiWdf4JxrwJhXJ4cA"><i className="fa fa-youtube" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
};