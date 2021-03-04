import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import FolderFile from '../FolderFile/FolderFile';

// Material UI : Dialog (Draggable)
function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

export default function Folder({ isFolderOpen, toggleFolder }) {
    return (
        <Dialog
            open={isFolderOpen}
            onClose={toggleFolder}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ color: "white", backgroundColor: "rgb(246,195,88)", cursor: 'Pointer' }} id="draggable-dialog-title">
                <span style={{fontWeight:"bold"}}>Project Folder</span>
            </DialogTitle>

            <DialogContent style={{ height: "350px", width: "550px" }}>
                <FolderFile fileName={"My_Portfolio"} fileDate={"2020-04-12"} fileType={"React, Javascript, HTML/CSS"} fileSize={"2KB"} />    
                <FolderFile fileName={"Peppermint-Timer"} fileDate={"2020-12-23"} fileType={"HTML, CSS, Javascript, React"} fileSize={"3KB"} />    
                <FolderFile fileName={"Notice-Board"} fileDate={"2020-06-03"} fileType={"React, JQuery, Material UI.."} fileSize={"3KB"} />    
                <FolderFile fileName={"Volume-Power-Test"} fileDate={"2020-05-31"} fileType={"React, Javascript, HTML/CSS.."} fileSize={"4KB"} />    
                <FolderFile fileName={"Team-Manager-Prototype"} fileDate={"2020-06-10"} fileType={"React, Javascript, HTML/CSS.."} fileSize={"5KB"} />    
                <FolderFile fileName={"Team-Manager-3"} fileDate={"2021-01-21"} fileType={"React, Firebase, Javascript.."} fileSize={"5KB"} />    
            </DialogContent>

            <DialogActions>
                <Button onClick={toggleFolder} color="secondary" variant="contained" >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
