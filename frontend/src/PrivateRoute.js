import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, exact, path, isSignIn, ...rest }) => (
  <Route
    exact={exact}
    path={path}
    render={props => 
      isSignIn ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect 
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
