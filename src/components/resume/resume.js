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
                <h3>Rice University</h3>
                <p className="info">B.S. in Computer Science, Minor in Data Science <span>•</span> <em className="date">Dec 2022</em></p>
                <ul>
                  <b>Classes:</b><li>• Operating Systems, Machine Learning, Distributed Systems, Algorithms, Tools & Models in Data Science,
                  Parallel Programming, Computer Systems, Data Visualization, Software Engineering, Software Design Laboratory, Data Structures, 
                  Discrete Mathematics</li>
                  <b>Activities:</b><li>• HackRice Tracks & Workshops Co-Chair, RemixCS Mentor, Rice CS Club</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Stuyvesant High School</h3>
                <p className="info">Advanced Regents High School Diploma <span>•</span> <em className="date">June 2018</em></p>
                <ul>
                  <b>Classes:</b><li>• Multivariate Calculus, AP Computer Science, AP Calculus BC, AP Chemistry, AP Statistics, AP Spanish, AP Human Geography, Western Politial Thought, Existentalism</li>
                  <b>Activities:</b><li>• President and Founder of The Stuyvesant Piano Club, Director of Chess Club at Windsor Park Library, Mahavir Jayanti Cultural Production, Math Team</li>
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
                <h3>Amazon</h3>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">May 2021 - August 2021</em></p>
                <ul>
                  <li>• Interned on Amazon Shopping Cart team in Seattle.</li>
                  <li>• Built a CLI-based load testing application, using Java and Spring framework, to audit performance of code changes by Cart's external integration teams.</li>
                  <li>• Developed a design document for the project outlining the solution strategy and low level design.</li>
                  <li>• Created a unit test suite using JUnit and Mockito.</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Kinder Institute for Urban Research</h3>
                <p className="info">Undergraduate Research Assistant <span>•</span> <em className="date">February 2021 - December 2021</em></p>
                <ul>
                  <li>• Built a dashboard to visualize city funding for Hurricane Harvey recovery using ReactJS and ApexCharts.</li>
                  <li>• Developed web scraping scripts, using Python and Beautiful Soup, to automate dataset construction for internal use.</li>
                  <li>• Created a recursive web crawler to download datasets en masse from web directories.</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Bank Novo</h3>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">February 2020 - August 2020</em></p>
                <ul>
                  <li>• Developed frontend for Novo’s web platform using ReactJS, SASS, and Axios.</li>
                  <li>• Integrated Segment's API in the marketing web app to collect and store user experience (UX) analytics data.</li>
                  <li>• Created a Continuous Integration auditing tool for Novo’s marketing app codebase to help ensure that future GitHub pull requests to this repository meet a certain performance threshold.</li>
                  <li>• Worked in an Agile environment with daily stand-up meetings and weekly sprint planning sessions.</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>MoneyMiles</h3>
                <p className="info">Co-Founder and Lead Software Engineer <span>•</span> <em className="date">January 2019 - June 2020</em></p>
                <ul>
                  <li>• MoneyMiles is a fitness app that creates personalized training workouts to enable you to achieve your running goals, whether that be running a 5k or simply to be more active.</li>
                  <li>• Won <a href="https://www.ccny.cuny.edu/zahn/blog/startups-win-150k-seed-funding-2019-zahn-final-pitch-night">first place</a> in the Zahn Innovation Competition and received over $35k in seed funding.</li>
                  <li>• Built and designed our entire iOS application from the ground up, utilizing frameworks such as Core Motion and MapKit.
                  Facilitated and implemented feedback from our users and beta tester groups.</li>
                  <li>• Integrated a CoreML classification model to categorize users into different running plans.</li>
                  <li>• Launched our iOS application to the App Store and have rolled out numerous updates since.</li>
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
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand c" /><em>C</em></li>
                <li><span className="bar-expand sql" /><em>SQL</em></li>
                <li><span className="bar-expand swift" /><em>Swift</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
    );
  }
};
