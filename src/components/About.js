import React, { Component } from 'react';
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
              Dan is a front end web developer living in Kitchener Ontario. An
              engaging and resourceful professional with a devotion to perpetual
              growth and a passion for exploring. Dan is a natural problem
              solver who loves to create & collaborate as part of a team.
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
