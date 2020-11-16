import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PantryTab from './pantryTab';
import { Hidden } from '@material-ui/core';
import { USER_PANTRY_QUERY } from '../../APIFunctions/queries'
import { useQuery } from 'react-apollo';

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
  const [selectedTab, setSelectedTab] = useState(0);
  const [pantrySizes, setPantrySizes] = useState({})
  const userID = props._id;

  const { data, loading, error } = useQuery(USER_PANTRY_QUERY, {
    variables: { userID }
  })

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

  const pantries = data.userPantriesOne ? data.userPantriesOne.pantries : []

  const handlePantryLoad = (name, itemCount) => {
    let newPantrySizes = { ...pantrySizes, [name]: itemCount }
    setPantrySizes(newPantrySizes)
  }

  const handleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  // Make a tab at the bottom that allows you to add pantries
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
        aria-label="Pantries"
        className={classes.tabs}
      >
        {pantries.map((pantry, index) => {
          const name = pantry.name
          return (
            <Tab label={
              <>
                <Typography variant='h5'>
                  {` ${name}`}
                </Typography>
                <Hidden xsDown>
                  <Typography varient='subtitle'>
                    {pantrySizes[name] ? `${pantrySizes[name]} items` : "Click to refresh"}
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
          value={selectedTab} index={index}
        >
          <PantryTab {...pantry} {...{ handlePantryLoad }} />
        </TabPanel>
      ))}
    </div>
  );
}
