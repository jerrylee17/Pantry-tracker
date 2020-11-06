import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PantryTab from './pantryTab';
import { Hidden } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '70vh',
    padding: theme.spacing(1)
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 'auto',
    minWidth: '10ch'
  },
  tabPanel: {
    flexGrow: 1,
    flexBasis: 0,
    position: 'relative'
  }
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {
    pantries
  } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Pantries"
        className={classes.tabs}
      >
        {pantries.map((pantry, index) => {
          return (
            <Tab label={
              <>
                <Typography variant='h5'>
                  {` ${pantry.name}`}
                </Typography>
                <Hidden xsDown>
                  <Typography varient='subtitle'>
                    {`${pantry.contents.length} items`}
                  </Typography>
                </Hidden>
                <br /><br />
              </>
            }
            {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      {pantries.map((pantry, index) => (
        <TabPanel
          className={classes.tabPanel}
          value={value} index={index}
        >
          <PantryTab {...pantry} />
        </TabPanel>
      ))}
    </div>
  );
}
