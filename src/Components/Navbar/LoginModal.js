import React from 'react'
import { Fade, makeStyles, TextField, Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(60),
    },
  },
  inputFields: {
    width: '100%',
  },
  loginText: {
    textAlign: 'center'
  },
  newLine: {
    flexBasis: '100%',
    height: '2vh'
  },
  registerButton: {
    float: 'right'
  }
}))

export default function LoginModal(props) {
  const {
    open,
    onClose
  } = props
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        className={classes.modal}
        open={open}
        onClose={onClose}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <h1 className={classes.loginText}>Log in/Register</h1>
            <TextField
              className={classes.inputFields}
              label='Username'
              variant='outlined'
              inputProps={{ maxLength: 30 }}
            />
            <div className={classes.newLine} />
            <TextField
              className={classes.inputFields}
              label='Password'
              type='password'
              variant='outlined'
              inputProps={{ maxLength: 30 }}
            />
            <div className={classes.newLine} />
            <Button
              variant='contained'
              color='primary'
            >
              Log in
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.registerButton}
            >
              Register
            </Button>
            <div className={classes.newLine} />
          </div>
        </Fade>
      </Modal>
    </>
  )
}
