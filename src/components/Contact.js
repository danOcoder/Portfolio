import React, { Component } from 'react';
import FloatedLabelInput from './FloatedLabelInput.js';
import FloatedLabelTextArea from './FloatedLabelTextArea.js';
import lucky from '../assets/lucky.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={lucky} alt='small dog' />
          </div>
          <div className='copyWrap'>
            <h2>Hi!</h2>
            <p>
              If you would like to get in touch with me either fill out the
              contact form or if you prefer shoot an email to{' '}
              <span>
                <a href='mailto:info@danocoder.com'>info@danocoder.com</a>
              </span>
            </p>
          </div>
          <form
            action='http://www.focuspocus.io/magic/2f889601f87170169c2e6de87dfd7cd7'
            method='POST'
          >
            <FloatedLabelInput
              placeholder='Name'
              name='name'
              id='name'
              type='text'
            />
            <FloatedLabelInput
              placeholder='Email'
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
