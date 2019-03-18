import React, { Component } from 'react';
import styled from 'styled-components';

const MyHeader = styled.nav`
${'' /* background-color: #f2b093; */}
  flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  #container {
    display: inline-flex;
  }
  li {
    display: inline-flex;
    text-decoration: none;
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: #1e1e1e;
  }
  a:hover {
    color: grey;
    text-decoration: underline;
  }
  h1 {
    padding: 0 20px;
    color: #f2b093;
  }
`
class Header extends Component {
  render() {
    return (
      <MyHeader>
        <div id="container">
          <h1>dakotah ducharme</h1>
          <ul>
            <li><a href="https://www.github.com/dakotahducharme">github</a></li>
            <li><a href="https://www.twitter.com/devdbd">twitter</a></li>
            <li><a href="https://www.linkedin.com/in/devdbd/">linkedIn</a></li>
            <li><a href="">contact me</a></li>
          </ul>
        </div>
      </MyHeader>
    )
  }
}

export default Header;