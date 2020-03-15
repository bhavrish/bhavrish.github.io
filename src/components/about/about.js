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
            <p>Hi! I'm Bhavesh and I'm a sophomore at Macaulay Honors College in NYC. I have a huge passion for coding, music, and math. 
            I'll begin by talking about my first passion: coding. I began web development in high school, and started iOS Development a year back. 
            I have completed over 10 Hackathons till date and co-founded my first start-up, MoneyMiles, this year. When I am not coding, you can find me 
            practicing the piano. I began playing the piano when I was 5 years old. Since then, I have performed in numerous concerts and have passed the 
            ABRSM (Associated Board of the Royal Schools of Music) Level 8 Piano Exam, as well as completed the NYSSMA Piano Exams (up to level 6) 
            with Honors. In high school, I ran a piano club where we taught other students how to play the piano, and performed at locations all over the 
            city, from opera centers to nursing homes. Currently, in college, I am the Vice President of the chamber music chapter at my college. 
            When I'm not coding or practicing the piano, I am also a huge fan of math competitions. I took advanced math classes in high school, 
            and am currently minoring in math. I was also part of the math team in my high school, where I took many math competitions including the AMC 12, 
            and qualified for AIME. It's pretty hard to describe myself in 1 paragraph, but I hope you now have a better idea of me and my interests!  
            </p>
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
};