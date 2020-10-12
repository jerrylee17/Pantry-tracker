import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import {
  Avatar,
  Grid,
  Paper,
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import PantryCard from './PantryCard'
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
const useStyles = makeStyles((theme) => ({
  profileText: {
    textAlign: 'center'
  },
  paper: {
    margin: '7vh 10vw 5vh 10vw',
    height: 'auto',
    minHeight: '70vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily
  },
  avatarWrapper: {
    order: 1,
    paddingBottom: 'min(5vh, 4vw)'
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[300]),
    backgroundColor: deepPurple[300],
    height: 'min(10vh, 8vw)',
    width: 'min(10vh, 8vw)',
    margin: 'max(-5vh, -4vw) auto'
  },
  welcomeText: {
    order: 2,
  },
  viewPantryText: {
    order: 3,
  },
  pantryDisplayWrapper: {
    paddingTop: '20px',
    order: 4,
    justifyContent: 'flex-start',
  },
  pantryGrid: {
    padding: '7vh',
    flexGrow: 1,
  },
}))
const USER_QUERY = gql`
query getUser {
  userMany {
    name
    username
    email
    pantries {
      name
      contents {
        name
        count
      }
    }
  }
}
`
// const user = {
//   name: "Jerry Lee",
//   username: "jerrylee17",
//   pasword: "verysecret",
//   email: "jerrysemailhaha@gmail.com",
//   pantries: [
//     {
//       name: 'Fridge',
//       contents: [
//         {
//           name: 'Milk',
//           count: 2
//         },
//         {
//           name: 'Cheese',
//           count: 5
//         }
//       ]
//     },
//     {
//       name: 'Snacks',
//       contents: [
//         {
//           name: 'doritos',
//           count: 2
//         },
//         {
//           name: 'cookies',
//           count: 8
//         }
//       ]
//     },
//     {
//       name: 'Dog food',
//       contents: [
//         {
//           name: 'Bones',
//           count: 2
//         },
//         {
//           name: 'Snacks',
//           count: 8
//         }
//       ]
//     }
//   ]
// }


export default function Profile() {
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
      <h1 className={clsx(classes.profileText)}>Profile</h1>
      <Paper
        elevation={10}
        className={classes.paper}
      >
        <div className={classes.avatarWrapper}>
          <Avatar className={classes.avatar}>JL</Avatar>
        </div>
        <div className={classes.welcomeText}>
          <h1>Welcome, {user.name.split(' ')[0]}</h1>
        </div>
        <div className={classes.viewPantryText}>
          <i>
            You have {user.pantries.length} pantries.
          </i>
        </div>
        <Grid
          container
          justify='center'
          className={classes.pantryDisplayWrapper}
        >
          {user.pantries.map((pantry, index) => (
            <Grid item className={classes.pantryGrid} sm={12} lg={6}>
              <PantryCard key={index} {...pantry} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

