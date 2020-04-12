import React, { Component } from 'react';
import Blink from 'react-blink-text';

class MyFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        myClassName: "blink",
        hover: false,
        bounce: ""
    }
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover});
  }

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

    let style;

    if (this.state.hover) {
        style = {
            backgroundImage: "linear-gradient(to left, red, yellow, orange, red, yellow, orange)", 
            WebkitBackgroundClip: "text",
            color: "transparent",
        };
        
    } else {
        style = {};        
    }

    return (
        <div className={this.state.bounce} style={{ cursor: 'Pointer', marginBottom:"60px", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "60px"}}>
            🍀 <span>
                    <span
                        onClick={this.bounceSwitch}
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                        style={style}
                    >
                        WELCOME TO MY PORTFOLIO <span className={this.state.myClassName}>_</span>
                    </span>
                </span>
        </div>       
    );
  };

}

export default MyFile;
