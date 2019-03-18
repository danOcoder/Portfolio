import React, { Component } from 'react';
import '../styles/footer.css';
import footerImg from '../assets/footer.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <div className='wrapper'>
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
          <a className='email' href='mailto:info@danocoder.com'>
            info@danocoder.com
          </a>
        </div> */}
        <div className='footer'>
          <div className='imgContainer'>
            <img src={footerImg} alt='flat illustration, decorative' />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
