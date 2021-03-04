import React, { Component } from 'react';
import './App.css';
// Components
import MyFile from './components/MyFile';
import MyTitle from './components/MyTitle';
// Images
import jsicon from './img/js2.png';
import githubicon from './img/githubicon2.png';
import emailicon from './img/email.png';
import foldericon from './img/foldericon.png';
import noteicon from './img/noteicon.png';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MyTitle />
        <div style={{display:"flex", flexDirection:"row"}}>
          <MyFile imgsrc={jsicon} iconName={"Hamin Park"} name={"javascript"} />
          <MyFile imgsrc={foldericon} iconName={"Projects"} name={"folder"} />
          <MyFile imgsrc={noteicon} iconName={"Skills.txt"} name={"skills"} />
          <MyFile imgsrc={githubicon} iconName={"Github"} name={"github"} />
          <MyFile imgsrc={emailicon} iconName={"Email"} name={"email"} />
        </div>
      </div>
    );
  };
}
