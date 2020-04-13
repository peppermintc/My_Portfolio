import React, { Component } from 'react';
import Blink from 'react-blink-text';
import styled from 'styled-components';

// Styled Component : <Title>
const Title = styled.span`
  &:hover {
    transition: all .3s;
    color: rgb(246,195,88);
    font-size: 56px;
  } 
`;

// Component : <MyFile/>
class MyFile extends Component {
  constructor(props) {
    super(props)
    // States
    this.state = {
        myClassName: "blink",
        bounce: "",
        titleText: ""
    }
  }

  // Bounce ON/OFF method
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

  // Render
  render() {
    return (
        <div className={this.state.bounce} style={{ cursor: 'Pointer', marginBottom:"60px", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "60px"}}>
            🍀 <span>
                    <Title
                        className={this.state.titleText}
                        onClick={this.bounceSwitch}
                    >
                        WELCOME TO MY PORTFOLIO <span className={this.state.myClassName}>_</span>
                    </Title>
                </span>
        </div>       
    );
  };

}

export default MyFile;
