import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER_QUERY } from '../../APIFunctions/queries';
import { currentUser, updateAccount } from '../../APIFunctions/auth';
import Alert from '@material-ui/lab/Alert';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
  },
  paper: {
    margin: '4vh 10vw 5vh 10vw',
    paddingTop: '3vh',
    height: 'auto',
    minHeight: '70vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily
  },
  inputFieldsWrapper: {
    justifyContent: 'center',
  },
  inputFields: {
    margin: theme.spacing(1),
    maxWidth: '50ch',
    width: '80%',
  },
  centerAlign: {
    justifyContent: 'center',
    margin: 'auto'
  },
  newLine: {
    flexBasis: '100%',
    height: '2vh'
  }
}));

export default function Account(props) {
  const classes = useStyles();
  const [init, setInit] = useState(false);
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [changePassword, setChangePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [infoError, setInfoError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [complete, setComplete] = useState(false);
  async function onLoad() {
    let currUser = await currentUser();
    setUserID(currUser);
  }
  useEffect(() => {
    onLoad();
  }, []);
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: { userID }
  });
  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  if (error) {
    return (
      <p>Error</p>
    );
  }
  const checkEmail = () => {
    const emailRegex = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/);
    return emailRegex.test(email);
  };

  const checkPasswords = () => {
    return !password || (password === confirmPassword);
  };

  const handleInfochange = async () => {
    if (!checkPasswords()) {
      setInfoError(true);
      setErrorMessage('Passwords do not match!');
      return;
    }
    if (!checkEmail()) {
      setInfoError(true);
      setErrorMessage('Invalid email!');
      return;
    }
    // Passed password check
    setInfoError(false);
    setErrorMessage('');
    const userData = {
      userID,
      name: name || data.userOne.name,
      username: username || data.userOne.username,
      passwordInfo: {
        changePassword: changePassword,
        newPassword: password
      },
      email: email || data.userOne.email,
    };
    const response = await updateAccount(userData);
    if (!response.error) {
      setComplete(true);
    }
  };

  const initValues = (user) => {
    setEmail(user.email);
    setName(user.name);
    setUsername(user.username);
    setPassword(user.password);
    setInit(true);
  };

  const user = data.userOne;
  if (!init) initValues(user);

  return (
    <>
      <h1 className={classes.header}>Account Settings</h1>
      <Paper className={classes.paper}>
        <div className={classes.inputFieldsWrapper}>
          <div className={clsx(classes.inputFields, classes.centerAlign)}>
            {
              infoError ? <Alert severity='error'>
                {errorMessage}
              </Alert> : (
                complete ? <Alert severity='success'>
                    Successfully Changed Settings!
                </Alert> : ''
              )
            }
          </div>
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Name'
            defaultValue={user.name}
            variant='outlined'
            inputProps={{ maxLength: 20 }}
            onChange={(e) => setName(e.target.value)}
            shrink
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='username'
            defaultValue={user.username}
            variant='outlined'
            inputProps={{ maxLength: 16 }}
            onChange={(e) => setUsername(e.target.value)}
            shrink
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='email'
            defaultValue={user.email}
            variant='outlined'
            inputProps={{ maxLength: 30 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='password'
            variant='outlined'
            type='password'
            inputProps={{ maxLength: 24 }}
            onChange={(e) => {
              if (e.target.value) {
                setChangePassword(true);
              } else {
                setChangePassword(false);
              }
              setPassword(e.target.value);
            }}
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Confirm password'
            type='password'
            variant='outlined'
            inputProps={{ maxLength: 24 }}
            onChange={(e) => {
              if (e.target.value) {
                setChangePassword(true);
              } else {
                setChangePassword(false);
              }
              setConfirmPassword(e.target.value);
            }}
          />
          <div className={classes.newLine} />
          <Button
            variant='contained'
            color='primary'
            onClick={handleInfochange}
          >
            Change Info
          </Button>
          <div className={classes.newLine} />
        </div>
      </Paper>
    </>
  );
}

