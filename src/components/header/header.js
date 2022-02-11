import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{resumeData.name}</h1>
            <h3>{resumeData.role}{resumeData.roleDescription}</h3>
            <hr />
            <ul className="social">
              <li><a href="https://github.com/bhavrish"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/bhavesh-shah-16a34b16b/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.youtube.com/channel/UC_zvGSOiWdf4JxrwJhXJ4cA"><i className="fa fa-youtube" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
};