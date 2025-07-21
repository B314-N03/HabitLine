import { Alert, Snackbar } from '@mui/material'
import React from 'react'


interface SuccessSnackbarProps {
  openSnackBar: boolean,
  setOpenSnackBar: React.Dispatch<React.SetStateAction<boolean>>,
  snackBarMessage: string
}

export default function SuccessSnackbar({ openSnackBar, setOpenSnackBar, snackBarMessage }: SuccessSnackbarProps) {
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