import React, { Component } from 'react';
import '../styles/footer.css';
import footerImg from '../assets/footer.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faLinkedinIn, faGithub);

class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='footer'>
        <div className='wrapper'>
          <ul className='socials'>
            <li>
              <a href='https://twitter.com/danOcoder'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/danocoder/'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href='https://github.com/danOcoder'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <a href='mailto:info@danocoder.com'>info@danocoder.com</a>
        </div>
        <div className='imgContainer'>
          <img src={footerImg} alt='flat illustration, decorative' />
        </div>
      </div>
    );
  }
}

export default Footer;
