import React, { Component } from 'react';
import styled from 'styled-components';

const About = styled.div`
  width: 500px;
  text-align: left;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  #container {
    align-items: center;
    justify-contemnt: flex-start;
  }
`


class Home extends Component {
  render(){
    return(
      <About>
        <div id="container">
          <p>I am a Full Stack Developer living in the Bay Area, with a passion for all things tech. In addition to development, I am also an artist in my spare time, and live for the feeling of empowerment after I create something meaningful. While I am young, I am extremely motivated, and believe that stepping out of your comfort zone is crucial for personal growth. I am a true empath who seeks to better the world, through a screen or otherwise. I am fascinated by innovative technologies and applications, and the way they function.</p>
          <p>My favorite technologies to work with: React, Ruby, HTML, CSS, JS</p>

          <p>I am also highly proficient in JQuery, express, node, and mongoose</p>
        </div>
      </About>
    )
  }
}

export default Home;