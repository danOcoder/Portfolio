import React, { Component } from 'react';
import '../styles/about.css';
import profilePic from '../assets/profilePicKracked.jpg';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={profilePic} alt='head shot of a real rad dude' />
          </div>
          <div className='copyWrap'>
            <h2>About Dan</h2>
            <p>
              Dan O’Connor is a Front End Web Developer living in
              Kitchener-Waterloo. Having completed HackerYou College of
              Technology’s Con-Ed courses in Web Development and JavaScript
              fundamentals in 2018, and the full time bootcamp at the same in
              March 2019 Dan possesses solid foundational skills in:
            </p>
            <ul>
              <li>HTML5, CSS3, Sass and responsive design</li>
              <li>JavaScript fundamentals, jQuery and using APIs</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Workflow automation and JavaScript tooling with Gulp</li>
              <li>
                Version control and open-sourcing code using Git and Github
              </li>
              <li>Paired programming and working in teams</li>
              <li>Sublime Text & VS Code</li>
              <li>Best practices for modern web development</li>
              <li>Website accessibility requirements </li>
            </ul>

            <p>
              An engaging and resourceful professional, an overview of Dan’s
              career and experience illustrates a devotion to perpetual growth
              and a passion for exploring.
            </p>
            <p>
              Prior to his present career, Dan worked variously in the fields of
              sales, construction, and sanitation. Along the way acquiring a
              rich tool kit of transferable skills in project development,
              management, administration and workflow optimization. Dan has also
              built solid strategies for effective engagement with all staff and
              stakeholders around him. Dan enjoyed success in these roles,
              however after developing an interest in the world of programming
              it became clear to him that this was where his true passion lay.
            </p>
            <p>
              At present, Dan is currently most excited about completing his
              search for a junior dev role and joining an exciting new team.
            </p>
            <p>
              When away from work Dan can be found spending time with family and
              friends, running on one of KW’s many great trails, listening to
              podcasts or following his beloved All Blacks. Dan always welcomes
              professional enquiries.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
