import React, { Component } from "react";
// Styled Component
import styled from "styled-components";
// Image
import foldericon from "../img/foldericon.png";

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

export default class FolderFile extends Component {
  handleClick = () => {
    if (this.props.fileName === "My_Portfolio") {
      window.open("https://peppermintc.github.io/My_Portfolio/", "_blank");
    } else if (this.props.fileName === "Notice-Board") {
      window.open("https://peppermintc.github.io/Notice-Board/", "_blank");
    } else if (this.props.fileName === "Volume-Power-Test") {
      window.open("https://peppermintc.github.io/Volume-Power-Test/", "_blank");
    } else if (this.props.fileName === "Team-Manager-Prototype") {
      window.open("https://peppermintc.github.io/Team-Manager/", "_blank");
    } else if (this.props.fileName === "Peppermint-Timer") {
      window.open("https://peppermintc.github.io/peppermint-timer/", "_blank");
    } else if (this.props.fileName === "Team-Manager-3") {
      window.open("https://peppermintc.github.io/team-manager-3/", "_blank");
    }
  };

  render() {
    return (
      <File onClick={() => this.handleClick()}>
        <div style={{ display: "inline-block", width: "170px" }}>
          <img
            src={foldericon}
            alt="foldericon"
            style={{ height: "13.5px", width: "13.5px", paddingRight: "10px" }}
          />
          <span style={{ fontSize: "14px" }}>{this.props.fileName}</span>
        </div>
        <span
          style={{
            fontSize: "14px",
            color: "rgb(104,106,129)",
            paddingRight: "20px",
          }}
        >
          {this.props.fileDate}
        </span>
        <span
          style={{
            fontSize: "14px",
            color: "rgb(104,106,129)",
            paddingRight: "20px",
          }}
        >
          {this.props.fileType}
        </span>
        <span style={{ fontSize: "14px", color: "rgb(104,106,129)" }}>
          {this.props.fileSize}
        </span>
      </File>
    );
  }
}
