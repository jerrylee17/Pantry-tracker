import React, { useState } from 'react';
import { Button, Divider, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from 'react-apollo';
import { USER_ADD_EXISTING_PANTRY, USER_ADD_NEW_PANTRY } from '../../APIFunctions/mutation';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    minHeight: '90%',
  },
  section: {
    flexGrow: 1,
    width: '50%',
    minHeight: '90%',
    // '&:hover': {
    //   transform: 'scale(1.02)',
    //   transitionDuration: '500ms',
    //   transitionProperty: 'transform',
    // }
  },
  sectionLeft: {
    marginRight: theme.spacing(4)
  },
  sectionRight: {
    marginLeft: theme.spacing(4)
  },
  divider: {
    minHeight: '90%'
  },
  button: {
    float: 'right'
  }
}));


export default function AddPantryTab(props) {
  const [newPantry, setNewPantry] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [existingPantry, setExistingPantry] = useState('');
  const classes = useStyles();
  const [userAddNewPantry] = useMutation(USER_ADD_NEW_PANTRY, {
    variables: {
      userID: props._id,
      pantryName: newPantry
    }
  });
  const [userAddExistingPantry] = useMutation(USER_ADD_EXISTING_PANTRY, {
    variables: {
      userID: props._id,
      pantryID: existingPantry
    }
  });

  return (
    <>
      {
        error ? <Alert severity='error'>
          {errorMessage}
        </Alert> : ''
      }
      <h2 className={classes.title}>Add Pantry</h2>
      <div className={classes.body}>
        <section className={clsx(classes.section, classes.sectionLeft)}>
          <h4> Add new pantry </h4>
          <br />
          <TextField
            label='Pantry Name'
            variant='outlined'
            size='medium'
            inputProps={{ maxLength: 30 }}
            onChange={(e) => setNewPantry(e.target.value)}
            fullWidth
          />
          <br /> <br />
          <Button
            color='primary'
            className={classes.button}
            size='medium'
            onClick={() => {
              if (!newPantry) {
                setError(true);
                setErrorMessage('New pantry needs a name!');
              } else {
                userAddNewPantry();
                window.location.reload();
              }
            }}

          >
            Submit
          </Button>
        </section>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <section className={clsx(classes.section, classes.sectionRight)}>
          <h4> Add existing pantry </h4>
          <br />
          <TextField
            label='Pantry ID'
            variant='outlined'
            size='medium'
            inputProps={{ maxLength: 24 }}
            onChange={(e) => setExistingPantry(e.target.value)}
            fullWidth
          />
          <br /> <br />
          <Button
            color='primary'
            className={classes.button}
            size='medium'
            onClick={() => {
              if (existingPantry.length !== 24) {
                setError(true);
                setErrorMessage('Invalid ID!');
              } else {
                userAddExistingPantry();
                window.location.reload();
              }
            }}
          >
            Submit
          </Button>
        </section>
      </div>
    </>
  );
}
