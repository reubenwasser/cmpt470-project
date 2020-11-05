import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UnauthMain from './Components/UnauthMain/UnauthMain'
import Register from './Components/Register/Register'

document.title = "Covid-19 Pandemic";

class App extends Component {
  
  render(){
     return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UnauthMain} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
    )
      
   
  }
}



export default App;
