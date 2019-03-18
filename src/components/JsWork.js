import React, { Component } from 'react';
import '../styles/work.css';
import overratedUnderrated from '../assets/jsSite.png';

class JsWork extends Component {
  render() {
    return (
      <div>
        <a href='#'>
          <div className='imgContainer'>
            <img src={overratedUnderrated} alt='decorative illustration' />
          </div>
        </a>
        <div className='copyWrap'>
          <h2>Overrated or Underrated?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            sunt eius obcaecati nisi hic minus! Pariatur voluptas laudantium
            eveniet velit distinctio laborum reiciendis quaerat consequuntur
            quos itaque dolorem excepturi omnis adipisci veritatis ipsa ut
            beatae quis cupiditate corporis, odio exercitationem? Deserunt
            voluptate dolorum repudiandae, laudantium eligendi a debitis ab
            commodi officia tempora, nemo tenetur culpa quisquam corrupti nisi
            eaque eius.
          </p>
        </div>
      </div>
    );
  }
}

export default JsWork;
