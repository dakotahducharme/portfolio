import React, { Component } from 'react';
import styled from 'styled-components';

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* width: 500px; */}
  margin: 0 250px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  padding: 0 40px;
  margin-top: 80px;
`


class Home extends Component {
  render(){
    return(
      <About>
        <div id="contain">
          <p>I am a Full Stack Developer living in the Bay Area, with a passion for all things tech. In addition to development, I am also an artist in my spare time, and live for the feeling of empowerment after I create something meaningful. While I am young, I am extremely motivated, and believe that stepping out of your comfort zone is crucial for personal growth. I am a true empath who seeks to better the world, through a screen or otherwise. I am fascinated by innovative technologies and applications, and the way they function.</p>
          <p>My favorite technologies to work with are React, Ruby, Rails, Vanilla JS, HTML, CSS, and PSQL.</p>

          <p>I am also highly proficient in JQuery, Express, Node, Sinatra, MongoDB, and Mongoose.</p>
        </div>
      </About>
    )
  }
}

export default Home;