import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';

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
}))

const user = {
  name: "Jerry Lee",
  email: "jerry.lee@sjsu.edu",
  username: "jerrylee",
  password: "jerry123",
  pantries: [
    {
      name: "Fridge",
      contents: [
        {
          name: "yogurt",
          count: 5
        },
        {
          name: "Eggs",
          count: 50
        },
        {
          name: "Hummus",
          count: 4
        },
        {
          name: "Milk",
          count: 11
        },
        {
          name: "Halal Chicken",
          count: 1
        }
      ]
    },
    {
      name: "Snacks",
      contents: [
        {
          name: "doritos",
          count: 8
        },
        {
          name: "poqitos",
          count: 9
        },
        {
          name: "marshmallows",
          count: 2
        }
      ]
    },
    {
      name: "Dog food",
      contents: [
        {
          name: "canned dog food",
          count: 5
        },
        {
          name: "beef jerky",
          count: 5
        }
      ]
    }
  ]
}

export default function Account() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>Account Settings</h1>
      <Paper className={classes.paper}>
        <div className={classes.inputFieldsWrapper}>
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
        </div>
      </Paper>
    </>
  );
}

