import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { isAuthenticated } from './APIFunctions/auth';
import NavBarWrapper from './Components/Navbar/NavbarWrapper';

let allRoutes = require('./Routes.json');
function importComponents(routes) {
  let newRoutes = routes.map((item) => {
    let Name = item.filePath ? item.filePath : item.Name;
    let object = {
      ...item,
      path: item.Route,
      Component: require(`./Pages/${Name}/${Name}.js`).default
    };
    return object;
  });
  return newRoutes;
}

export default function Routing(props) {
  const [Authenticated, setAuthenticated] = useState(false);
  console.log(window.localStorage)

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (isAuthenticated()) {
      setAuthenticated(true);
    } else {
      console.log('Not logged in')
    }
  }

  let routes = importComponents(allRoutes.Routes);
  return (
    <Router>
      <Switch>
        {routes.map(
          ({ Auth, path, Component }, index) => {
            if ((Auth === 'Yes' && Authenticated) ||
              Auth !== 'Yes'
            ) {
              return (
                <Route
                  key={index}
                  exact
                  path={path}
                  render={(props) => (
                    <NavBarWrapper
                      component={Component}
                      {...props}
                      {...{ Authenticated, setAuthenticated }}
                    />
                  )}
                />
              );
            }
            return true
          }
        )

        }
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
