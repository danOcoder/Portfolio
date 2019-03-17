import React, { Component } from 'react';
import '../styles/skills.css';
import profilePic from '../assets/profilePicKracked.jpg';
import html from '../assets/svg/html.svg';
import ny from '../assets/ny.jpg';
import css from '../assets/svg/css.svg';
import cup from '../assets/weirdCupStuff.jpg';
import js from '../assets/svg/js.svg';
import react from '../assets/svg/react.svg';
import museum from '../assets/museum.jpg';
import skull from '../assets/skull.jpg';
import jquery from '../assets/svg/jquery.svg';
import git from '../assets/svg/git.svg';
import candy from '../assets/candy.jpg';
import sass from '../assets/svg/sass.svg';
import flash from '../assets/flash.jpg';
import gulp from '../assets/svg/gulp.svg';
import lucky from '../assets/lucky.jpg';
class Skills extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='skills'>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img src={profilePic} alt='head shot of an enthusiastic web dev' />
          </div>
          <div className='imgContainer iconContainer1'>
            <img src={html} alt='html5 icon' />
          </div>
          <div className='imgContainer iconContainer2'>
            <img src={css} alt='css3 logo' />
          </div>
          <div className='imgContainer'>
            <img src={ny} alt='New York City Scape' />
          </div>
          <div className='imgContainer'>
            <img src={cup} alt='2 pink frosted donuts' />
          </div>
          <div className='imgContainer iconContainer3'>
            <img src={js} alt='javascript logo' />
          </div>
          <div className='imgContainer iconContainer1'>
            <img src={react} alt='react logo' />
          </div>
          <div className='imgContainer'>
            <img src={museum} alt='building with multi coloured glass facade' />
          </div>
          <div className='imgContainer'>
            <img
              src={skull}
              alt='neon sign shaped like a skull with a sweet hair do'
            />
          </div>
          <div className='imgContainer iconContainer2'>
            <img src={jquery} alt='css3 logo' />
          </div>
          <div className='imgContainer iconContainer3'>
            <img src={git} alt='javascript logo' />
          </div>
          <div className='imgContainer'>
            <img
              src={candy}
              alt='jar of candy with old timey straw sticking out of it'
            />
          </div>
          <div className='imgContainer'>
            <img src={flash} alt='close up of old school tattoo flash' />
          </div>
          <div className='imgContainer iconContainer1'>
            <img src={sass} alt='javascript logo' />
          </div>
          <div className='imgContainer iconContainer2'>
            <img src={gulp} alt='gulp logo' />
          </div>
          <div className='imgContainer'>
            <img src={lucky} alt='close up of a smiling dog' />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
