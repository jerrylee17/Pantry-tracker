import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER_QUERY } from '../../APIFunctions/queries';

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
  newLine: {
    flexBasis: '100%',
    height: '2vh'
  }
}));

export default function Account(props) {
  const classes = useStyles();
  const {
    data,
    loading,
    error
  } = useQuery(USER_QUERY);
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
  const user = data.userMany[0];
  return (
    <>
      <h1 className={classes.header}>Account Settings</h1>
      <Paper className={classes.paper}>
        <div className={classes.inputFieldsWrapper}>
          <TextField
            className={classes.inputFields}
            label='Change Name'
            defaultValue={user.name}
            variant='outlined'
            inputProps={{ maxLength: 20 }}
            shrink
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Change username'
            defaultValue={user.username}
            variant='outlined'
            inputProps={{ maxLength: 16 }}
            shrink
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Change email'
            defaultValue={user.email}
            variant='outlined'
            inputProps={{ maxLength: 30 }}
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Change password'
            variant='outlined'
            type='password'
            inputProps={{ maxLength: 24 }}
          />
          <div className={classes.newLine} />
          <TextField
            className={classes.inputFields}
            label='Confirm password'
            type='password'
            variant='outlined'
            inputProps={{ maxLength: 24 }}
          />
          <div className={classes.newLine} />
          <Button
            variant='contained'
            color='primary'
          >
            Submit
          </Button>
          <div className={classes.newLine} />
        </div>
      </Paper>
    </>
  );
}

