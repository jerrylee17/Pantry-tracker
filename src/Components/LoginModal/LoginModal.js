import React, { useState } from 'react';
import { Fade, makeStyles, TextField, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { login, register } from '../../APIFunctions/auth';
import Alert from '@material-ui/lab/Alert';

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
  modalRightAlignText: {
    cursor: 'pointer',
    float: 'right'
  }
}));

export default function LoginModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // true = login, false = register
  const [loginRegister, setLoginRegister] = useState(true)
  const {
    open,
    onClose,
  } = props;
  const classes = useStyles();
  const handleLogin = async (username, password) => {
    const data = { username, password };
    const loginStatus = await login(data);
    if (!loginStatus.error) {
      setError(false)
      props.setAuthenticated(true);
    } else {
      setError(true)
    }
  };

  const handleRegister = async () => {
    if (!checkPasswords()) {
      setError(true)
      setErrorMessage('Passwords do not match!')
      return;
    }
    if (!checkEmail()) {
      setError(true);
      setErrorMessage('Invalid email!');
      return;
    }
    // Passed password check
    setError(false)
    setErrorMessage('')
    const userData = {
      name,
      username,
      password,
      email
    }
    const registerResponse = await register(userData)
    if (registerResponse.error) {
      setError(true);
      setErrorMessage('Username/Email Taken already!')
      return;
    }
    handleLogin(username, password);
  }
  const closeModal = () => {
    onClose();
    setLoginRegister(true);
    setError(false);
  }

  const checkEmail = () => {
    const emailRegex = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/);
    return emailRegex.test(email)
  }

  const checkPasswords = () => {
    return password === confirmPassword
  }

  return (
    <>
      <Modal
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        className={classes.modal}
        open={open}
        onClose={closeModal}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            {
              error ? <Alert severity='error'>
                {loginRegister ? 'Incorrect Username or Password!' : errorMessage}
              </Alert> :
                ''
            }
            <h1 className={classes.loginText}>Log in/Register</h1>
            {loginRegister ? (
              <>
                <TextField
                  className={classes.inputFields}
                  label='Username/Email'
                  variant='outlined'
                  inputProps={{ maxLength: 30 }}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className={classes.newLine} />
                <TextField
                  className={classes.inputFields}
                  label='Password'
                  type='password'
                  variant='outlined'
                  inputProps={{ maxLength: 30 }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>) : (
                <>
                  <TextField
                    className={classes.inputFields}
                    label='Name'
                    variant='outlined'
                    inputProps={{ maxLength: 30 }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className={classes.newLine} />
                  <TextField
                    className={classes.inputFields}
                    label='username'
                    variant='outlined'
                    inputProps={{ maxLength: 30 }}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className={classes.newLine} />
                  <TextField
                    className={classes.inputFields}
                    label='email'
                    variant='outlined'
                    inputProps={{ maxLength: 30 }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={classes.newLine} />
                  <TextField
                    className={classes.inputFields}
                    label='Password'
                    type='password'
                    variant='outlined'
                    inputProps={{ maxLength: 30 }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={classes.newLine} />
                  <TextField
                    className={classes.inputFields}
                    label='Confirm Password'
                    type='password'
                    variant='outlined'
                    inputProps={{ maxLength: 30 }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </>
              )
            }
            <div className={classes.newLine} />
            {
              loginRegister ? (
                <>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      handleLogin(username, password);
                    }}
                  >
                    Log in
                </Button>
                  <Typography
                    className={classes.modalRightAlignText}
                    color='primary'
                    onClick={() => {
                      setLoginRegister(!loginRegister)
                      setError(false)
                    }}
                  >
                    New? Register here
                </Typography>
                </>
              ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                )
            }
          </div>
        </Fade>
      </Modal>
    </>
  );
}
