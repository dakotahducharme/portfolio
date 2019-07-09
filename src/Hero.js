import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHero = styled.div`
  background-image: url('pbg.jpeg');

`

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <p>this is a fucking hero</p>
      </StyledHero>
    )
  }
}

export default Hero;