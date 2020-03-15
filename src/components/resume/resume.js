import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Macaulay Honors College</h3>
                <p className="info">B.E. in Computer Science, Minor in Mathematics <span>•</span> <em className="date">May 2022</em></p>
                <ul>
                  <li>• <b>Classes:</b> Intro to Computing, Discrete Mathematics, Programming Languages, Writing for Engineering</li>
                  <li>• <b>Activities:</b> VP of Macaulay Chamber Music Society, Tutor for CSC103 (Intro to Computing), CHIMP Mentor, MHC++</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Stuyvesant High School</h3>
                <p className="info">Advanced Regents High School Diploma <span>•</span> <em className="date">June 2018</em></p>
                <ul>
                  <li>• <b>Classes:</b> Multivariate Calculus, AP Computer Science, AP Calculus BC, AP Chemistry, AP Statistics, AP Spanish, AP Human Geography, Western Politial Thought, Existentalism</li>
                  <li>• <b>Activities:</b> President and Founder of The Stuyvesant Piano Club, Director of Chess Club at Windsor Park Library, Mahavir Jayanti Cultural Production, Math Team</li>
                </ul>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>MoneyMiles</h3>
                <p className="info">Co-Founder and Lead Software Engineer <span>•</span> <em className="date">January 2019 - Present</em></p>
                <ul>
                  <li>• Built and published iOS app to App Store using technologies like MapKit and Core Motion.</li>
                  <li>• First place in the Zahn Innovation Competition and won over $35k in funding to continue working on the project.</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>New York Code and Design Academy (NYCDA)</h3>
                <p className="info">Software Development Intern <span>•</span> <em className="date">July 2016 - September 2016</em></p>
                <ul>
                  <li>• Used Python and Twitter’s API to help NYCDA connect with potential leaders in tech and education in Seattle where NYCDA had recently expanded their business.</li>
                  <li>• Designed a dynamic, mobile-friendly website for NYCDA’s youth initiative.</li>
                </ul>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>My primary coding background is in iOS Development and backend web development. I use Swift for iOS Development and have worked
            with frameworks such as CoreML and CoreMotion. For Web Development, I typically use PHP/Python and MySQL.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand swift" /><em>Swift</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand php" /><em>PHP</em></li>
                <li><span className="bar-expand mysql" /><em>MySQL</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand css3" /><em>CSS3</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
    );
  }
};
