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
              An engaging and resourceful professional, an overview of Dan’s
              career and experience illustrates a devotion to perpetual growth
              and a passion for exploring.
            </p>
            <p>
              Prior to his transition into Web Development, Dan worked variously
              in the fields of sales, construction, and environmental solutions.
              Along the way acquiring a rich tool kit of transferable skills in
              project development, management, administration and workflow
              optimization. Dan has also built solid strategies for effective
              engagement with all staff and stakeholders around him. Dan enjoyed
              success in these roles, however after developing an interest in
              the world of programming it became clear to him that this was
              where his true passion lay.
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
