import React, { Component } from 'react';
import './App.css';
// Images
import jsicon from './js2.png';
import githubicon from './githubicon.png';
import emailicon from './email.png';
import foldericon from './foldericon.png';
import noteicon from './noteicon.png';
// Components
import MyFile from './components/MyFile';
import MyTitle from './components/MyTitle';

class App extends Component {
  
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

export default App;
