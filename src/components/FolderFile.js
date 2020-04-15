import React, { Component } from 'react';
// Styled Component
import styled from 'styled-components';
// Material UI
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// Image
import foldericon from '../img/foldericon.png';
import githubsmallicon from '../img/githubsmallicon.png';

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

    this.state = {
      dialogopen: false
    }
  }

  // onClick Handler
  handleClick = () => {
    if(this.props.fileName === "My_Portfolio") {
      window.open("https://peppermintc.github.io/My_Portfolio/","_blank");
    }
  }
  // dialog ON/OFF function
  dialogToggle = () => {
    this.setState({dialogopen: !this.state.dialogopen})
  }
  
  // Render
  render() {
    return (
      <File onClick={() => this.dialogToggle()}>
        <div style={{display:"inline-block", width: "170px" }}>
          <img src={foldericon} style={{ height: "13.5px", width: "13.5px", paddingRight: "10px" }} alt="foldericon"/>
          <span style={{ fontSize: "14px" }}>{this.props.fileName}</span>
        </div>
        <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileDate}</span>
        <span style={{ fontSize: "14px", color: "rgb(104,106,129)", paddingRight: "20px" }}>{this.props.fileType}</span>
        <span style={{ fontSize: "14px", color: "rgb(104,106,129)" }}>{this.props.fileSize}</span>

        {/* Folder Dialog */}
        <Dialog
            open={this.state.dialogopen}
            onClose={this.dialogToggle}
        >
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => {window.open("https://peppermintc.github.io/My_Portfolio/","_blank")}}>Open</Button>
            <Button onClick={() => {window.open("https://github.com/peppermintc/My_Portfolio","_blank")}}>
              <img src={githubsmallicon} style={{ height: "14.5px", width: "14.5px", paddingRight: "7px" }} alt="githubicon"/>
              View Code
            </Button>
            <Button><span style={{fontWeight: "bold"}}>X </span></Button>
          </ButtonGroup>
        </Dialog>
      </File>
    );
  };
}

export default FolderFile;

