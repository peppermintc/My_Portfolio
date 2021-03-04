import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header/Header';
import FileList from './components/FileList/FileList';
// Images
import jsicon from './images/js2.png';
import githubicon from './images/githubicon2.png';
import emailicon from './images/email.png';
import foldericon from './images/foldericon.png';
import noteicon from './images/noteicon.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      files: [
        {
          name: "Hamin Park",
          fileImage: jsicon
        },
        {
          name: "Projects",
          fileImage: foldericon
        },
        {
          name: "Skills.txt",
          fileImage: noteicon
        },
        {
          name: "Github",
          fileImage: githubicon
        },
        {
          name: "Email",
          fileImage: emailicon
        },
      ] 
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FileList files={this.state.files}/>
      </div>
    );
  };
}
