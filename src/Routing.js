import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { isAuthenticated } from './APIFunctions/auth';
import NavBarWrapper from './Components/Navbar/NavbarWrapper';
import Home from './Pages/Home/Home'

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
  const [Authenticating, setIsAuthenticating] = useState(true);
  const [Authenticated, setAuthenticated] = useState(false);

  async function onLoad() {
    if (isAuthenticated()) {
      setAuthenticated(true);
    }
    setIsAuthenticating(!Authenticating);
  }

  useEffect(async () => {
    onLoad();
  }, []);

  let routes = importComponents(allRoutes.Routes);
  return (
    !Authenticating && (<Router>
      <Switch>
        {routes.map(
          ({ Auth, path, Component }, index) => {
            return (
              <Route
                key={index}
                exact
                path={path}
                render={(props) =>
                  ((Auth !== 'Yes' ||
                    (Auth === 'Yes' && Authenticated))) ? (
                      <NavBarWrapper
                        component={Component}
                        {...props}
                        {...{ Authenticated, setAuthenticated }}
                      />
                    )
                    : (
                      <Redirect to={'/'} />
                    )
                }
              />
            );
          }
        )
        }
        <Route path="/*" component={Home} />
      </Switch>
    </Router>)
  );
}
