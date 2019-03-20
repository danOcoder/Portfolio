import React, { Component } from 'react';
import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import js from '../assets/svg/js.1.svg';
import react from '../assets/svg/react.svg';
import jquery from '../assets/svg/jquery.svg';
import git from '../assets/svg/git.svg';
import sass from '../assets/svg/sass.svg';
import gulp from '../assets/svg/gulp.svg';
import vs from '../assets/svg/vsCode.svg';
import work from '../assets/work.png';

class HomePage extends Component {
  render() {
    return (
      <div className='skills'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={work} alt='illustration aesthetic only' />
          </div>
          <div className='copyWrap'>
            <h2>Skills</h2>
            <p>To pay the bills..</p>
          </div>
          <div className='skillsIconWrapper'>
            <div className='skillIconContainer'>
              <img src={html} alt='html5 icon' />
            </div>
            <div className='skillIconContainer'>
              <img src={css} alt='css3 logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={js} alt='javascript logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={jquery} alt='css3 logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={react} alt='react logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={git} alt='git logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={sass} alt='sass logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={gulp} alt='gulp logo' />
            </div>
            <div className='skillIconContainer'>
              <img src={vs} alt='vs code logo' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
