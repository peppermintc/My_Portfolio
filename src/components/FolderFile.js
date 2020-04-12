import React, { Component } from 'react';

import foldericon from '../foldericon.png';

class FolderFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }
  
  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  handleClick = () => {
    if(this.props.fileName === "My_Portfolio") {
      window.open("https://github.com/peppermintc","_blank");
    }
  }
 
  render() {
    
    var style1;
    if (this.state.hover) {
      style1 = { marginRight: "10px", marginLeft:"10px", padding: "5px", border: "1px solid rgb(153, 209, 255)", background: "rgb(204, 232, 255)", cursor: "pointer" }
    } else {
      style1 = { marginRight: "10px", marginLeft:"10px", padding: "6px" }
    }

    return (
        <div>
            <div
                onClick={this.handleClick} 
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                style={style1}
            >
                <div style={{display:"inline-block", width: "170px" }}>
                  <img src={foldericon} style={{ height: "13.5px", width: "13.5px", paddingRight: "10px" }} alt="foldericon"/>
                  <span style={{ fontSize: "14px" }}>{this.props.fileName}</span>
                </div>
                <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileDate}</span>
                <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileType}</span>
                <span style={{ fontSize: "14px", color: "rgb(104,106,129)" }}>{this.props.fileSize}</span>
            </div>
        </div>
    );
  };

}

export default FolderFile;

