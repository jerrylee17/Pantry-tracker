import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
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

export default function Routing({ appProps }) {
  let routes = importComponents(allRoutes.Routes);
  return (
    <Router>
      <Switch>
        {routes.map(
          ({ path, Component }, index) => {
            return (
              <Route
                key={index}
                exact
                path={path}
                render={(props) => (
                  <NavBarWrapper
                    component={Component}
                    {...props}
                    {...appProps}
                  />
                )}
              />
            );
          }
        )

        }
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
