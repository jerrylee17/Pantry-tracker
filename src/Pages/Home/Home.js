import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import food_mid from './images/food_mid.svg';
import map from './images/map.svg';
import pantrymanagement from './images/pantrymanagement.svg';
import speed_left from './images/speed_left.svg';
import stats_right from './images/stats_right.svg';
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  lightbackground: {
    backgroundColor: '#D3D7FF'
  },
  medbackground: {
    backgroundColor: '#ACB4FF'
  },
  darkbackground: {
    backgroundColor: '#9098E0'
  },
  lightbanner: {
    margin: '0px',
    border: '200px'
  },
  darkbanner: {
    backgroundColor: '#9098e0',
    margin: '0px',
  },
  paper: {
    backgroundColor: '#D3D7FF',
    margin: '7vh 5vw 5vh 5vw',
    height: 'auto',
    minHeight: '40vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily
  },
  mainimage: {
    width: '100%',
    height: '100%'
  },
  boxes: {
    backgroundColor: '#D3D7FF',
    margin: '2vh 3vw 3vh 3vw',
    justifyContent: 'center',
    height: 'auto',
    minHeight: '20vh',
    flex: '50%',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily
  },
  miniimage: {
    paddingTop: '5%',
    paddingLeft: '25%',
    paddingRight: '25%',
    width: '50%',
    height: '50%',
  },
  typography: {
    padding: '4px',
    textAlign: 'center',
  },
  introfont: {
    fontSize: '150%',
  },
}));


export default function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid
          container
          justify='center'
          spacing={3}
          xs={12}
        >
          <Grid item xs={6}>
            <Paper
              className={classes.paper}
              elevation={0}
            >
              <img
                className={classes.mainimage}
                src={pantrymanagement}
                alt="pantry management"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              className={classes.paper}
              elevation={0}
            >
              <Typography>
                <h1>A Pantry management system that just works</h1>
                <body1 className={classes.introfont}>Figure out the food items in your pantry with a click of a button.</body1>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          className={classes.darkbanner}
          container
          justify='center'
          spacing={3}
          xs={12}
        >
          <Grid item xs={4}>
            <Paper
              className={classes.boxes}
              justifyContent='center'
              elevation={3}
            >
              <img
                className={classes.miniimage}

                src={speed_left}
                alt="fast updates"
              />
              <Typography
                className={classes.typography}
              >
                Changes in your pantry will be reflected on the website immediately
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={4}>
            <Paper
              className={classes.boxes}
              elevation={3}
            >
              <img
                className={classes.miniimage}
                src={food_mid}
                alt="food suggestions"
              />
              <Typography
                className={classes.typography}
              >
                Changes in your pantry will be reflected on the website immediately
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={classes.boxes}
              elevation={3}
            >
              <img
                className={classes.miniimage}
                src={stats_right}
                alt="can see pantry status"
              />
              <Typography
                className={classes.typography}
              >
              Changes in your pantry will be reflected on the website immediately
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          className={classes.lightbackground}
          container
          justify='center'
          spacing={3}
          xs={12}
        >
          <Typography>
            MANAGEMENT AND MONITORING TOOLS FOR YOUR Pantry
            Tracking the items in your pantry has never been easier
            Our Pantry tracking solution empowers users with one to several pantries to manage and view their pantries in real time.
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.darkbanner}
          justify='center'
          spacing={3}
          xs={12}
        >
          <Grid
            item
            xs={12}
          >
            <Typography>
              How it comes together
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <img
              className={classes.mainimage}
              src={map}
              alt="map"
            />
          </Grid>
        </Grid>
        <Grid
          classname={classes.darkbanner}
          container
          justify='center'
          spacing={3}
          xs={12}
        >
          <Grid
            item
            justify='center'
            spacing={3}
            xs={12}
          >
            <Paper>
              <Typography>
                LEARN MORE ABOUT US
                Interested in the application and it's creators?
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            justify='center'
            xs={6}
          >
            <Paper>
              <Typography>
                What's in your pantry was created by seniors at San Jose State University
              </Typography>
              <Button>Learn More</Button>
            </Paper>

          </Grid>
          <Grid
            item
            justify='center'
            xs={6}
          >
            <Paper>
              <Typography>
                The application and all of the code needed to run it can be found on github
              </Typography>
              <Button>Learn More</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

