import React, { Component } from 'react';
import styled from 'styled-components'

const ContactInfo = styled.div`
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

class Contact extends Component {
  render(){
    return(
      <ContactInfo>
        <p>I can generally be reached at by my email, dakotahbducharme@gmail.com or by my cell phone number, (305)-783-1845</p>
        <p>Please email me for inquiries about my resume or other materials, I would love to share my work with you!</p>
      </ContactInfo>
    )
  }
}

export default Contact;