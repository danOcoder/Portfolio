import React, { Component } from 'react';
import '../styles/contact.css';
import lucky from '../assets/lucky.jpg';

class Thanks extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='thanks'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={lucky} alt='small dog' />
          </div>
          <div className='thanksText'>
            <h2>Thanks!</h2>
            <p>
              Your message has been sent and I'll get back to you as soon as I
              can!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thanks;
