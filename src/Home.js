import React, { Component } from 'react';
import styled from 'styled-components';
import mixme from './mixme.png';
import superrad from './super-rad-react.herokuapp.com_.png';



class Home extends Component {
  render(){
    return(
      <div>
        <div class="contain">
          <h4>about me</h4>
          <p>I am a Full Stack Developer living in the Bay Area, with a passion for all things tech. In addition to development, I am also an artist in my spare time, and live for the feeling of empowerment after I create something meaningful. While I am young, I am extremely motivated, and believe that stepping out of your comfort zone is crucial for personal growth. I am a true empath who seeks to better the world, through a screen or otherwise. I am fascinated by innovative technologies and applications, and the way they function.</p>
          <p>My favorite technologies to work with are React, Ruby, Rails, Vanilla JS, HTML, CSS, and PSQL.</p>

          <p>I am also highly proficient in JQuery, Express, Node, Sinatra, MongoDB, and Mongoose.</p><br/>

          <h4>My work</h4>
            <div id="image-container">
              <a href="https://mix-me-react.herokuapp.com/"><img src={mixme} width="250px"/></a><a href="https://github.com/dakotahducharme/MixMe-Frontend">github</a>
              <a href="https://super-rad-react.herokuapp.com/"><img src={superrad} width="250px" height="400px" /></a>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;