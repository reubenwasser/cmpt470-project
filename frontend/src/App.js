import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UnauthMain from './Components/UnauthMain/UnauthMain'
import Register from './Components/Register/Register'
import UserPage from './Components/UserPage/UserPage'
import SignIn from './Components/SignIn/SignIn'

document.title = "Covid-19 Pandemic";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'main',
      isSignIn: false,
      user: {
        name: '',
        email: '',
        dob: '',
        city: '',
        joined: ''
      }
    };
  }

  UserInfo = (data) => {
    this.setState({ user: {
      name: data.name,
      email: data.email,
      dob: data.dob,
      city: data.city,
      joined: data.joined
    }})
  }

  
  render(){
     return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UnauthMain} />
          <Route exact
            path='/Register'
            render={(props) => (
              <Register {...props} 
                UserInfo={this.UserInfo}
               />
            )}
          />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact 
            path="/UserPage" 
            render={(props) => (
              <UserPage {...props}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
      
   
  }
}



export default App;
