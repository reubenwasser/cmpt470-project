import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UnauthMain from './Components/UnauthMain/UnauthMain'
import Register from './Components/Register/Register'
import UserPage from './Components/UserPage/UserPage'

document.title = "Covid-19 Pandemic";

class App extends Component {
  
  render(){
     return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UnauthMain} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/UserPage" component={UserPage} />

        </Switch>
      </BrowserRouter>
    )
      
   
  }
}



export default App;
