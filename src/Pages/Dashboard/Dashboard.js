import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import VerticalTabs from './tabPanel';
import { useQuery } from '@apollo/react-hooks';
import { USER_QUERY } from '../../APIFunctions/queries';
import { currentUser } from '../../APIFunctions/auth';

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
}));


export default function Dashboard(props) {
  const classes = useStyles();
  const [userID, setUserID] = useState('');
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
  if (error) {
    return (<>
      Error
    </>);
  }
  if (loading) {
    return (<>
      Loading
    </>);
  }
  const user = data.userOne;
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

