import React, { Component } from 'react';
import styled from 'styled-components'; 
import Editor from '../Editor/Editor';
import Folder from '../Folder/Folder';
import Skills from '../Skills/Skills';
import EmailSnackbar from '../EmailSnackbar/EmailSnackbar'

// Styled Component
const FileIcon = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    padding: 16px;

    &:hover {
        padding: 15px;
        border: 1px solid rgb(160, 160, 160);
        background: rgb(61, 63, 66);
        cursor: pointer;
    }
`;

export default class File extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        isJSOpen: false,
        isFolderOpen: false,
        isSKillsOpen: false,
        isSnackbarOpen: false,
    }
  }

  // Toggle handler
  toggleJS = () => {
    this.setState({isJSOpen: !this.state.isJSOpen})
  }
  toggleFolder = () => {
    this.setState({isFolderOpen: !this.state.isFolderOpen})
  }
  toggleSkills = () => {
    this.setState({isSKillsOpen: !this.state.isSKillsOpen})
  }
  closeSnackbar = (event) => {
    this.setState({ isSnackbarOpen: false });
  }  
  
  // onClick Handler
  handleClick = () => {
    if (this.props.iconName === "Hamin Park") {
        this.toggleJS();
    }
    if (this.props.iconName === "Projects") {
        this.toggleFolder();
    }
    if (this.props.iconName === "Skills.txt") {
        this.toggleSkills();
    }
    if (this.props.iconName === "Github") {
        window.open("https://github.com/peppermintc","_blank");
    }
    if (this.props.iconName === "Email") {
        // Copying email to clipboard
        let textToCopy = "haminjp@naver.com";
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = textToCopy
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        this.setState({ isSnackbarOpen: true });
    }
  }
  
  render() {
    return (
        <div style={{ marginTop: "50px" }}>
            <FileIcon onClick={() => this.handleClick()}>
                <img src={this.props.imgsrc} style={{ height: "96px", width: "96px", marginBottom: "7px", marginLeft: "auto", marginRight: "auto", display: "block" }} alt="jsicon"/>
                <div style={{ fontSize: "18px", textAlign: "center" }}>{this.props.iconName}</div>
            </FileIcon>

            {this.props.iconName === "Hamin Park" && <Editor isJSOpen={this.state.isJSOpen} toggleJS={this.toggleJS} />}
            {this.props.iconName === "Projects" && <Folder isFolderOpen={this.state.isFolderOpen} toggleFolder={this.toggleFolder} />}
            {this.props.iconName === "Skills.txt" && <Skills isSkillsOpen={this.state.isSKillsOpen} toggleSkills={this.toggleSkills} />}
            {this.props.iconName === "Email" && <EmailSnackbar isSnackbarOpen={this.state.isSnackbarOpen} closeSnackbar={this.closeSnackbar} />}
        </div>
    );
  };

}
