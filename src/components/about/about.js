import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt=""/>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hi! I'm Bhavesh and I'm a senior at Rice University majoring in computer science with a minor in data science!</p>
            <p>
            My work experience includes internships at Amazon and Novo Platform Inc., as well as co-founding a 
            fitness app startup during my freshman year of college. On the side, I have also been involved in other initiatives 
            including teaching a non-profit Android development class through CodePath and co-leading the Tracks & Workshops team 
            for HackRice.
            </p>
            <p>Ouside of coding, some of my other passions include travelling, hiking, and learning new songs on the piano, which I have playing
            since I was 5 years old. In high school, I ran a piano club where I taught students how to play the piano, as well as organized
            multiple club performances at locations ranging from opera centers to nursing homes. Feel free to check out some of my videos on my 
            YouTube channel linked above!  
            </p>
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
};