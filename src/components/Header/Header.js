import React, { Component } from 'react';
import styled from 'styled-components';

// Styled Component : <Title>
const Title = styled.span`
  &:hover {
    transition: all .3s;
    color: rgb(246,195,88);
    
  } 
`;

export default class Header extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        bounce: "",
    }
  }

  // Bounce ON/OFF
  bounceSwitch = () => {
    this.setState({
        bounce: "animated bounce"
    })

    setTimeout(() => {
        this.setState({
            bounce: ""
        })
    }, 900)
  };

  render() {
    return (
      <div className={this.state.bounce} style={{ cursor: 'Pointer', marginBottom:"60px", borderTop: "2px solid white", borderBottom: "2px solid white", paddingBottom: "10px", textAlign: "center"}}>
        <span>
          <Title
              onMouseOver={this.bounceSwitch}
              onMouseOut={this.bounceSwitch}
          >
              <span style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: "65px" }}>HAMIN PARK<br /></span>
              <span style={{ fontSize: "30px" }}>portfolio <span>_</span></span>
          </Title>
        </span>
      </div>       
    );
  };
}


