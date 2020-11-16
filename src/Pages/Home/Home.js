import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  Button,
  Hidden,
  createMuiTheme
} from '@material-ui/core';
import food_mid from './images/food_mid.svg';
import map from './images/map.svg';
import pantrymanagement from './images/pantrymanagement.svg';
import speed_left from './images/speed_left.svg';
import stats_right from './images/stats_right.svg';
<<<<<<< HEAD
=======
import clsx from 'clsx';


const routes = require('../../Routes.json');
>>>>>>> changed font so it look nicer
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  betterFont: {
    fontFamily: 'adobe-devanagari !important',
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
    paddingLeft: '20%',
    minHeight: '40vh',
    minWidth: '30vw',
    width: '70%',
    height: '80%',
  },
  boxesRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  boxes: {
    margin: '4vh 4vw 4vh 4vw',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '195px',
    maxWidth: '288px',
    minHeight: '195px',
    flex: '50%',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1),
  },
  miniImagePepTalk: {
    paddingTop: '5%',
    paddingLeft: '23%',
  },
  leftImage: {
    paddingLeft: '28%',
    width: '45%',
    height: '45%',
  },
  midImage: {
    paddingTop: '8%',
    width: '60%',
    height: '60%',
  },
  rightImage: {
    paddingLeft: '30%',
    paddingTop: '4%',
    width: '47%',
    height: '47%',
  },
  textbox: {
    margin: '0',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainText: {
    paddingRight: '25%'
  },
  typography: {
    padding: '4px',
    textAlign: 'center',
  },
  textRow: {
    marginTop: '0px',
    marginBottom: '5px',
    padding: '0px',
  },
  subtitleText: {
    ...theme.typography.fontWeightLight,
    ...theme.typography.overline,
  },
  headerText: {
    fontFamily: 'adobe-devanagari !important',
    marginTop: '0',
    ...theme.typography.fontWeightBold,
    ...theme.typography.h5,
  },
  definitionText: {
    ...theme.typography.fontWeightBold,
    ...theme.typography.h7,
    width: '35em',
  },
  mapRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    margin: 'auto',
  },
  mappedImgBox: {
    paddingTop: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  mapHiddenBox: {
    [theme.breakpoints.down('md')]: {
      maxHeight: '0px',
      maxWidth: '0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '4px',
      textAlign: 'center',
    }
  },
  hiddenBoxGrid: {
    margin: '0px',
  },
  listText: {
    textAlign: 'left',
  },
  bigBox: {
    height: '500px',
    width: '250px',
  },
  map: {
    width: '90vw',
  },
  learnAboutUsGrid: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    // flexDirection: 'column',
    alignItems: 'center',
  },
  learnAboutUsPaper: {
    margin: '4vh 4vw 4vh 4vw',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '80px',
    minHeight: '80px',
    // maxWidth: '72px',
    minWidth: '150px',
    flex: '50%',
    flexDirection: 'column',
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(1),
  },
  learnAboutUsBanner: {
    margin: '0px',
    marginBottom: '10px'
  },
  aboutUsText: {
    padding: '4px',
    textAlign: 'left',
  },
  disclaimerText: {
    margin: '0px',
    justifyContent: 'center',

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
                alt='pantry management'
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              className={classes.paper}
              elevation={0}
            >
              <Typography
                className={clsx(classes.mainText, classes.betterFont)}
              >
                <h1>A Pantry management system that just works</h1>
                <body1 className={classes.introfont}>Figure out the food items in your pantry with a click of a button.</body1>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.boxesRow, classes.darkbanner)}
          container
          spacing={1}
          xs={12}
        >
          <div
            className={classes.boxesRow}
          >
            <Grid
              item
              xs={4}
              justifyContent='center'
            >
              <Paper
                className={clsx(classes.boxes, classes.lightbackground)}
                justifyContent='center'
                elevation={3}
                spacing={3}
              >
                <img
                  className={clsx(classes.miniImagePepTalk, classes.leftImage)}
                  src={speed_left}
                  alt='fast updates'
                />
                <Typography
                  className={clsx(classes.typography, classes.betterFont)}
                >
                  Changes in your pantry will be reflected on the website immediately
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={4}
            >
              <Paper
                className={clsx(classes.boxes, classes.lightbackground)}
                elevation={3}
              >
                <img
                  className={clsx(classes.miniImagePepTalk, classes.midImage)}
                  src={food_mid}
                  alt='food suggestions'
                />
                <Typography
                  className={clsx(classes.typography, classes.betterFont)}
                >
                  Get smart food suggestions based on what you eat
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={4}
            >
              <Paper
                className={clsx(classes.boxes, classes.lightbackground)}
                elevation={3}
              >
                <img
                  className={clsx(classes.miniImagePepTalk, classes.rightImage)}
                  src={stats_right}
                  alt='can see pantry status'
                />
                <Typography
                  className={clsx(classes.typography, classes.betterFont)}
                >
                  Track information for as many pantries as you want
                </Typography>
              </Paper>
            </Grid>
          </div>
        </Grid>
        <Grid
          container
          className={clsx(classes.lightbackground, classes.textbox)}
          justify='center'
          spacing={3}
          xs={12}
        >
          <Typography
            className={clsx(classes.typography, classes.subtitleText, classes.betterFont)}
            inline
          >
            <em>MANAGEMENT AND MONITORING TOOLS FOR YOUR Pantry</em>
          </Typography>
          <Typography
            className={clsx(classes.typography, classes.headerText, classes.betterFont)}
            inline
          >
            Tracking the items in your pantry has never been easier
          </Typography>
          <Typography
            className={clsx(classes.typography, classes.definitionText, classes.betterFont)}
            inline
          >
            Our Pantry tracking solution empowers users with one to several pantries to manage and view their pantries in real time.
          </Typography>
        </Grid>
        <Grid
          container
          className={clsx(classes.darkbanner, classes.mapRow, classes.mappedImgBox)}
          justify='center'
          spacing={3}
          xs={12}
        >
          <Grid
            item
            className={classes.hiddenBoxGrid}
            xs={12}
          >
            <Typography
              className={clsx(classes.typography, classes.headerText, classes.betterFont)}
            >
              How it comes together
            </Typography>
          </Grid>
          <Hidden mdDown>
            <div
              className={classes.mapHiddenBox}
            >
              <img
                className={classes.map}
                src={map}
                alt='map'
              />
            </div>
          </Hidden>
          <Hidden lgUp>
            <Grid
              item
              xs={12}
            >
              <Typography
                className={clsx(classes.typography, classes.definitionText, classes.listText, classes.betterFont)}
                inline
              >
                1. A user purchases a Raspberry Pi with a camera from us and installs it onto their pantry.
              </Typography>
              <Typography
                className={clsx(classes.typography, classes.definitionText, classes.listText, classes.betterFont)}
                inline
              >
                2. The Pi controls the camera to take pictures of the pantry and then transmits it to our AWS server
              </Typography>
              <Typography
                className={clsx(classes.typography, classes.definitionText, classes.listText, classes.betterFont)}
                inline
              >
                3. The AWS server batches the images and processes the data through a neural network
              </Typography>
              <Typography
                className={clsx(classes.typography, classes.definitionText, classes.listText, classes.betterFont)}
                inline
              >
                4. After determining the food contents, the AWS server then updates the website server for that users account
              </Typography>
              <Typography
                className={clsx(classes.typography, classes.definitionText, classes.listText, classes.betterFont)}
                inline
              >
                5. When the user next accesses the website, their pantry contents will be rendered for them to see
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          className={clsx(classes.learnAboutUsBanner, classes.boxesRow)}
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
            <Typography
              className={clsx(classes.typography, classes.subtitleText, classes.betterFont)}
              inline
            >
              LEARN MORE ABOUT US
            </Typography>
            <Typography
              className={clsx(classes.typography, classes.headerText, classes.betterFont)}
              inline
            >
              Interested in the application or its creators?
            </Typography>
          </Grid>
            <Grid
              item
              className={classes.learnAboutUsGrid}
              justifyContent='center'
              xs={6}
            >
              <Paper
                className={clsx(classes.learnAboutUsPaper, classes.medbackground)}
              >
                <Typography
                  className={clsx(classes.aboutUsText, classes.betterFont)}
                >
                  What's in your pantry was created by seniors at San Jose State University
                </Typography>
                <Button
                  href="/about"
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
            <Grid
              item
              className={classes.learnAboutUsGrid}
              justifyContent='center'
              xs={6}
            >
              <Paper
                className={clsx(classes.learnAboutUsPaper, classes.medbackground)}
              >
                <Typography
                  className={clsx(classes.aboutUsText, classes.betterFont)}
                >
                  The application and all of the code needed to run it can be found on github
                </Typography>
                <Button
                  href="https://github.com/jerrylee17/Pantry-tracker"
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
        </Grid>
        <Grid
          container
          className={clsx(classes.darkbackground, classes.darkbanner, classes.disclaimerText)}
          spacing={3}
          xs={12}
        >
          <Typography
            className={clsx(classes.typography, classes.subtitleText, classes.betterFont)}
            inline
          >
            What's in your pantry - Copyright © 2020
          </Typography>
        </Grid>
      </div>
    </>
  );
}

