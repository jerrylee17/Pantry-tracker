import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import VerticalTabs from './tabPanel'
import { useQuery } from '@apollo/react-hooks';
import { USER_QUERY } from '../../APIFunctions/user.js';

const useStyles = makeStyles((theme) => ({
  dashboardText: {
    textAlign: 'center'
  },
  verticalTabs: {
    margin: '7vh 10vw 5vh 10vw',
    height: 'auto',
    minHeight: '70vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily
  }
}))


export default function Dashboard(props) {
  const classes = useStyles();
  const { data, loading, error } = useQuery(USER_QUERY);
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
      <h1 className={classes.dashboardText}>
        {`${user.name.split(' ')[0]}'s dashboard`}
      </h1>
      <Paper className={classes.verticalTabs} elevation={5}>
        <VerticalTabs {...user} />
      </Paper>
    </>
  );
}

