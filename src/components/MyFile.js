import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import smalljsicon from '../smalljsicon.png';
import smalljsonicon from '../smalljsonicon.png';

import Blink from 'react-blink-text';

import FolderFile from './FolderFile';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

class MyFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      open: false,
      jsopen: false,
      folderopen: false,
      snackbaropen:false,
      snackbarmsg: "Email address has been copied to your clipboard 😀"
    }
  }

  snackbarClose = (event) => {
      this.setState({snackbaropen: false});
  }
  
  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  jsToggle = () => {
    this.setState({jsopen: !this.state.jsopen})
  }

  folderToggle = () => {
    this.setState({folderopen: !this.state.folderopen})
  }
  
  handleClick = () => {
    if(this.props.iconName === "Hamin Park") {
        this.jsToggle();
    }
    if(this.props.iconName === "Projects") {
        this.folderToggle();
    }
    if(this.props.iconName === "Skills.txt") {
        this.handleToggle();
    }
    if(this.props.iconName === "Github") {
        window.open("https://github.com/peppermintc","_blank");
    }
    if(this.props.iconName === "Email") {
        let textToCopy = "haminjp@naver.com";
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = textToCopy
        dummy.select();
        document.execCommand("copy");

        this.setState({snackbaropen: true});
    }
  }
 
  render() {
    
    const { open } = this.state

    var style1;
    if (this.state.hover) {
      style1 = { marginRight: "10px", marginLeft:"10px", padding: "15px", border: "1px solid rgb(160, 160, 160)", background: "rgb(61, 63, 66)", cursor: "pointer" }
    } else {
      style1 = { marginRight: "10px", marginLeft:"10px", padding: "16px" }
    }

    return (
        <div>
            <div
                onClick={this.handleClick} 
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                style={style1}
            >
                <img src={this.props.imgsrc} style={{ height: "96px", width: "96px", marginBottom: "7px", marginLeft: "auto", marginRight: "auto", display: "block" }} alt="jsicon"/>
                <div style={{ fontSize: "18px", textAlign: "center" }}>{this.props.iconName}</div>
            </div>

            <Dialog
                open={open}
                onClose={this.handleToggle}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'Pointer' }} id="draggable-dialog-title">
                    Skills.txt
                </DialogTitle>
                <DialogContent style={{height: "325px", width: "400px"}}>
                    <DialogContentText>
                        Web Development Skills
                        <li>HTML / CSS</li>
                        <li>Javascript</li>
                        <li>React js</li>
                        <li>Material UI</li>
                        <li>Node js</li>
                        <br />
                        Others
                        <li>Python</li>
                        <li>C</li>
                        <li>Java</li>
                        <li>Github</li>
                        <li>Android Studio</li>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleToggle} color="primary" >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar 
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open = {this.state.snackbaropen}
                onClose={this.snackbarClose}
                autoHideDuration={5000}
            >
                <Alert style={{fontSize:"17px"}} onClose={this.snackbarClose} severity="success">
                    {this.state.snackbarmsg}
                </Alert>
            </Snackbar>

            <Dialog
                open={this.state.jsopen}
                onClose={this.jsToggle}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ color: "aliceblue", backgroundColor: "rgb(35,35,35)", cursor: 'Pointer', height: "20px" }} id="draggable-dialog-title">
                    <span style={{ align: "left", fontSize : "14px", backgroundColor: "rgb(60,60,60)", padding: "10px 30px 10px 10px" }}>
                        <img src={smalljsicon} style={{ height: "13.5px", width: "13.5px", marginRight: "10px" }} alt="smalljsicon"/>
                        Hamin Park.js
                    </span>
                    <span style={{ align: "left", fontSize : "14px", backgroundColor: "rgb(50,50,50)", padding: "10px 30px 10px 10px" }}>
                        <img src={smalljsonicon} style={{ height: "13.5px", width: "13.5px", marginRight: "10px" }} alt="smalljsonicon"/>
                        package.json
                    </span>
                </DialogTitle>
                <DialogContent style={{ height: "350px", width: "550px", backgroundColor: "rgb(60,60,60)", paddingLeft: "10px" }}>
                    <DialogContentText style={{ color: "aliceblue", whiteSpace: "pre" }}>
                         <table style={{ fontSize : "14px"}}>
                             <tr>
                                <td style={{ color: "rgb(138,138,138)", textAlign:"right", paddingRight:"20px"}}>
                                    1<br />
                                    2<br />
                                    3<br />
                                    4<br />
                                    5<br />
                                    6<br />
                                    7<br />
                                    8<br />
                                    9<br />
                                    10<br />
                                    11<br />
                                    12<br />
                                    13<br />
                                    14<br />
                                    15<br />
                                </td>
                                <td style={{fontFamily: "'Source Code Pro', monospace"}}>
                                    <span style={{color:"rgb(88,157,83)"}}>// LIFE IN CODE</span><br />
                                    <span style={{color:"rgb(198,128,161)"}}>import</span> <span style={{color:"rgb(134,217,237)"}}>*</span> <span style={{color:"rgb(198,128,161)"}}>from</span> <span style={{color:"rgb(212,122,84)"}}>Javascript</span><br />
                                    <span style={{color:"rgb(198,128,161)"}}>import</span> <span style={{color:"rgb(134,217,237)"}}>*</span> <span style={{color:"rgb(198,128,161)"}}>from</span> <span style={{color:"rgb(212,122,84)"}}>'React'</span><br />
                                    <span style={{color:"rgb(198,128,161)"}}>import</span> <span style={{color:"rgb(134,217,237)"}}>*</span> <span style={{color:"rgb(198,128,161)"}}>from</span> <span style={{color:"rgb(212,122,84)"}}>Bible;</span><br />
                                    <br />
                                    <span style={{color:"rgb(58,125,214)"}}>let</span> <span style={{color:"rgb(134,217,237)"}}>take_rest</span> = <span style={{color:"rgb(207,220,170)"}}>watch</span>(<span style={{color:"rgb(134,217,237)"}}>sky</span>).<span style={{color:"rgb(207,220,170)"}}>then</span>(<span style={{color:"rgb(207,220,170)"}}>wash</span>(<span style={{color:"rgb(134,217,237)"}}>mind</span>))<br />
                                    {'                          '}.<span style={{color:"rgb(207,220,170)"}}>catch</span>(<span style={{color:"rgb(134,217,237)"}}>err</span> => <span style={{color:"rgb(134,217,237)"}}>err</span>.<span style={{color:"rgb(207,220,170)"}}>fix</span>());<br />
                                    <span style={{color:"rgb(58,125,214)"}}>let</span> <span style={{color:"rgb(134,217,237)"}}>survive</span> = <span style={{color:"rgb(207,220,170)"}}>buyMask</span>();<br />
                                    <br />
                                    <span style={{color:"rgb(198,128,161)"}}>while</span>(<span style={{color:"rgb(134,217,237)"}}>living</span>) {'{'}<br />
                                    {"    "}<span style={{color:"rgb(207,220,170)"}}>find</span>(<span style={{color:"rgb(134,217,237)"}}>purpose_of_life</span>);<br />
                                    {'}'}<br />
                                    <span className={"blink"}>_</span><br />
                                    <br />
                                    <br />
                                </td>
                             </tr>
                         </table>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{backgroundColor: "rgb(60,60,60)"}}>
                    <Button onClick={this.jsToggle} color="primary" variant="contained" >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={this.state.folderopen}
                onClose={this.folderToggle}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ color: "white", backgroundColor: "rgb(246,195,88)", cursor: 'Pointer' }} id="draggable-dialog-title">
                    <span style={{fontWeight:"bold"}}>Project Folder</span>
                </DialogTitle>

                <DialogContent style={{ height: "350px", width: "550px" }}>
                    <FolderFile fileName={"My_Portfolio"} fileDate={"2020-04-12"} fileType={"React, Javascript, HTML/CSS"} fileSize={"2KB"} />    
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.folderToggle} color="secondary" variant="contained" >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
  };

}

export default MyFile;

