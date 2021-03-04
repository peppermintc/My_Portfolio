import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import smalljsicon from '../../images/smalljsicon.png';
import smalljsonicon from '../../images/smalljsonicon.png';

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

export default function Editor({ isJSOpen, toggleJS }) {
    return (
        <Dialog
            open={isJSOpen}
            onClose={toggleJS}
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
                                <span style={{color:"rgb(88,157,83)"}}>{'//'} LIFE IN CODE</span><br />
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
                <Button onClick={toggleJS} color="primary" variant="contained" >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
