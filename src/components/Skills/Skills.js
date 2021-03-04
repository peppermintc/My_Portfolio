import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

// Material UI : Dialog (Draggable)
function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

export default function Skills({ isSkillsOpen, toggleSkills }) {
    return (
        <Dialog
            open={isSkillsOpen}
            onClose={toggleSkills}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'Pointer' }} id="draggable-dialog-title">
                Skills.txt
            </DialogTitle>
            <DialogContent style={{height: "325px", width: "400px"}}>
                <DialogContentText>
                    Web Development Skills
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <br />
                    Others
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>Android Studio</li>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleSkills} color="primary" >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
