import React, { Component } from 'react';
import footerImg from '../assets/footer.png';

class Footer extends Component {
  render() {
    return (
      <footer>
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
