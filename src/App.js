import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';


document.title = "Covid-19 Pandemic";

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'main',
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      }
    };
  }

  UserInfo = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState({isSignIn: true}); 
    }
    else if (route === 'register'){
      this.setState({isSignIn: false});
    }
    else{
      this.setState({isSignIn: false});      
    }
    this.setState({route: route})
  }

  render(){
    const {route, isSignIn} = this.state ;
    return (
      <div className="App">
        <NavBar isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>
        {route === 'main' ?
          <h1>This is main page</h1>
          
          :
          (route === 'register' ?
            <Register UserInfo={this.UserInfo} onRouteChange={this.onRouteChange}/> 
            :
            <h1>Sign in Page</h1>
          )
        }      

      </div>
    );
  }
}



export default App;
