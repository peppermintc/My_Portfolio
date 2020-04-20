import React, { Component } from 'react';
import Blink from 'react-blink-text';
import styled from 'styled-components';

// Styled Component : <Title>
const Title = styled.span`
  &:hover {
    transition: all .3s;
    color: rgb(246,195,88);
    
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
        <div className={this.state.bounce} style={{ cursor: 'Pointer', marginBottom:"60px", borderTop: "2px solid white", borderBottom: "2px solid white", paddingBottom: "10px", textAlign: "center"}}>
            
              <span>
                <Title
                    className={this.state.titleText}
                    onMouseOver={this.bounceSwitch}
                    onMouseOut={this.bounceSwitch}
                >
                    <span style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: "65px" }}>HAMIN PARK<br /></span>
                    <span style={{fontSize: "30px"}}>portfolio <span className={this.state.myClassName}>_</span></span>
                </Title>
              </span>
              {/* 🍀 */}
        </div>       
    );
  };

}

export default MyFile;
