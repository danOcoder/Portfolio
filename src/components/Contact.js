import React, { Component } from 'react';
import FloatedLabelInput from './FloatedLabelInput.js';
import FloatedLabelTextArea from './FloatedLabelTextArea.js';
import '../styles/contact.css';
import lucky from '../assets/lucky.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={lucky} alt='small dog' />
          </div>
          <h2>Hi!</h2>
          <form
            action='http://www.focuspocus.io/magic/2f889601f87170169c2e6de87dfd7cd7'
            method='POST'
          >
            <div className='contactInfo'>
              <FloatedLabelInput
                placeholder='Name*'
                name='name'
                id='name'
                type='text'
              />
              <FloatedLabelInput
                placeholder='Email*'
                type='email'
                id='email'
                name='email'
              />
              <FloatedLabelInput
                type='tel'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='Phone Number'
              />
            </div>
            <FloatedLabelTextArea
              name='specialInstructions'
              id='specialInstructions'
              placeholder='Message'
              cols='30'
              rows='10'
            />
            <input type='submit' id='submit' value='Send Message' />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
