import { Alert, Snackbar } from '@mui/material'
import React from 'react'


interface SucessSnackbarProps {
    openSnackBar: boolean,
    setOpenSnackBar: React.Dispatch<React.SetStateAction<boolean>>,
    snackBarMessage: string
}

export default function SucessSnackbar({openSnackBar, setOpenSnackBar, snackBarMessage}:SucessSnackbarProps) {
    return (
        <Snackbar
            open={openSnackBar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackBar(false)}
        >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>   
    )
}