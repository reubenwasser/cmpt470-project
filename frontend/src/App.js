import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UnauthMain from './Components/UnauthMain/UnauthMain'
import Register from './Components/Register/Register'
import UserPage from './Components/UserPage/UserPage'
import SignIn from './Components/SignIn/SignIn'
import TestingSite from './Components/TestingSite/TestingSite'
import Map from './Components/Map/Map';
import Stats from './Components/Stats/Stats'
import PrivateRoute from './PrivateRoute';

document.title = 'Covid-19 Pandemic';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'main',
      user: {
        name: '',
        email: '',
        dob: '',
        city: '',
        joined: '',
      },
    };
  }

  UserInfo = (data) => {
    this.setState({
      user: {
        name: data.name,
        email: data.email,
        dob: data.dob,
        city: data.city,
        joined: data.joined,
      },
    });
    const user = {
      name: data.name,
      email: data.email,
      dob: data.dob,
      city: data.city,
      joined: data.joined,
    };

    sessionStorage.setItem('user', JSON.stringify(user));
  };

  CorrectSignIn = (bool) => {
    sessionStorage.setItem('isSignIn', bool);
  }
  
  render(){
    const isSignIn = sessionStorage.getItem('isSignIn');
     return (
      <BrowserRouter useEffect>
        <Switch>
          <Route exact path='/' component={UnauthMain} isSignIn={isSignIn} />
          <Route exact path='/Register'
            render={(props) => ( <Register {...props} UserInfo={this.UserInfo} /> )}
          />
          <Route exact path='/SignIn'
            render={(props) => ( <SignIn {...props} UserInfo={this.UserInfo} CorrectSignIn={this.CorrectSignIn} /> )}
          />
          <PrivateRoute exact path='/UserPage' component={UserPage} isSignIn={isSignIn} />
          <PrivateRoute exact path='/Stats' component={Stats} isSignIn={isSignIn} />
          <PrivateRoute exact path='/TestingSite' component={TestingSite} isSignIn={isSignIn} />
          <PrivateRoute exact path='/Map' component={Map} isSignIn={isSignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
