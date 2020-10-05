import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from '@material-ui/core'
import {
  AccountCircle
} from '@material-ui/icons'
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
const routes = require('../../Routes.json');

const useStyles = makeStyles({
  navbarBackground: {
    backgroundColor: '#9098e0'
  },
  title: {
    cursor: 'pointer',
  },
  navbarFiller: {
    flexGrow: 1
  },
  navbarLink: {
    cursor: 'pointer',
    margin: 10,
    textAlign: 'right',
    justifyContent: 'space-between'
  },
  IconButton: {
    justifyContent: 'right',
  },
  toolbar: {
    display: 'flex'
  }
});

export default function NavBar(props) {
  const classes = useStyles();
  const auth = true
  const [anchorEl, setAnchorEl] = useState(null);
  const profileOpen = Boolean(anchorEl);
  const history = useHistory()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChange = (path) => {
    history.push(path)
  }

  return (
    <>
      <AppBar position="static" className={classes.navbarBackground}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => routeChange('/')}
          >
            <EmojiFoodBeverageOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => routeChange('/')}
            align='left'
          >
            What's in your pantry?
          </Typography>
          <div className={classes.navbarFiller}></div>
          {routes.Routes.map((route, index) => {
            if (
              route.Navbar &&
              route.Navbar === 'Yes' &&
              (!route.NavbarPos || route.NavbarPos !== 'Profile')
            ) {
              return (
                <Typography
                  variant='subtitle1'
                  key={index}
                  onClick={() => routeChange(route.Route)}
                  className={classes.navbarLink}
                >
                  {route.Name}
                </Typography>
              )
            }
            return true
          })}
          {/* Things to display when logged in */}
          {auth && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="navbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={clsx(classes.IconButton)}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="navbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={profileOpen}
                onClose={handleClose}
              >
                {routes.Routes.map((route, index) => {
                  if (
                    route.Navbar &&
                    route.Navbar === "Yes" &&
                    route.NavbarPos &&
                    route.NavbarPos === "Profile"
                  ) {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => {
                          handleClose()
                          routeChange(route.Route)
                        }}
                      >
                        {route.Name}
                      </MenuItem>
                    )
                  }
                  return true
                })}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}


