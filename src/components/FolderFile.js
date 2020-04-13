import React, { Component } from 'react';
import styled from 'styled-components';
import foldericon from '../foldericon.png';

// Styled Component
const File = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  padding: 6px;

  &:hover {
    padding: 5px;
    border: 1px solid rgb(153, 209, 255);
    background: rgb(204, 232, 255);
    cursor: pointer;
  }
`;

// Component : <FolderFile/>
class FolderFile extends Component {
  constructor(props) {
    super(props)
  }

  // onClick Handler
  handleClick = () => {
    if(this.props.fileName === "My_Portfolio") {
      window.open("https://peppermintc.github.io/My_Portfolio/","_blank");
    }
  }
  
  // Render
  render() {
    return (
        <File onClick={() => this.handleClick()}>
          <div style={{display:"inline-block", width: "170px" }}>
            <img src={foldericon} style={{ height: "13.5px", width: "13.5px", paddingRight: "10px" }} alt="foldericon"/>
            <span style={{ fontSize: "14px" }}>{this.props.fileName}</span>
          </div>
          <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileDate}</span>
          <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileType}</span>
          <span style={{ fontSize: "14px", color: "rgb(104,106,129)" }}>{this.props.fileSize}</span>
        </File>
    );
  };
}

export default FolderFile;

