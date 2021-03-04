import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function EmailSnackbar({ isSnackbarOpen, closeSnackbar }) {
    const snackbarMessage = "Email address has been copied to your clipboard 😀";
    
    return (
        <Snackbar 
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open = {isSnackbarOpen}
            onClose = {closeSnackbar}
            autoHideDuration={5000}
        >
            <MuiAlert variant="filled" style={{ fontSize: "17px" }} onClose={closeSnackbar} severity="success">
                {snackbarMessage}
            </MuiAlert>
        </Snackbar>
    )
}
