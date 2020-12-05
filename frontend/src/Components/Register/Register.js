import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import "./Register.css"


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      dob: '',
      city: '',
      validateEmail: true
    }
  }

  
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onDoBChange = (event) => {
    this.setState({ dob: event.target.value });
  };

  onCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  onSubmitRegister = () => {
    fetch('/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        dob: this.state.dob,
        city: this.state.city,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user === 'Email is not available.'){
          this.setState({validateEmail: false})
        }
        else{
          this.props.UserInfo(user);
          this.props.history.push('/Signin')
        }
      });
  };

  onKeyPressedRegister = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitRegister();
    }
  };

  render(){
    const {validateEmail} = this.state;
    return(
      <div>

        <NavigationBar active='Register' isSignIn={false} />
        
        <div onKeyDown={this.onKeyPressedRegister}>
          <div class="regisUserForm">
            <h1 class="title">Register</h1>
            <label>Full Name : </label><br/><br/>
            <input 
              class="regisInput"
              id="fn" 
              type="text" 
              name="fullname" 
              placeholder="eg: Anderson Parker" 
              onChange={this.onNameChange}/>
            <br/>
            <label>UserName : </label><br/><br/>
            <input 
              class="regisInput"
              id="email" 
              type="email" 
              name="email" 
              size="50" required 
              placeholder="eg: example@email.com" 
              onChange={this.onEmailChange}/>
            <br/>
            <label>password: </label><br/><br/>
            <input
              class="regisInput" 
              id="password" 
              type="password" 
              name="email" 
              size="50" 
              required
              placeholder="eg: bubbleteaislife" 
              onfocus="this.placeholder = ''"
              onChange={this.onPasswordChange}/>
            <br/>
            <label>Date of Birth: </label><br/><br/>
            <input
              class="regisInputDate" 
              id="dob" 
              type="date" 
              name="dob" 
              size="50" required 
              onChange={this.onDoBChange}/>
            <br/>
            <label>City: </label><br/><br/>
            <input
              class="regisInput"
              id="city" 
              type="text" 
              name="city" 
              size="50" 
              list="cities" required 
              onChange={this.onCityChange}/>
            <datalist id="cities">
                <option>Vancouver</option>
                <option>Victoria</option> 
                <option>Richmond</option> 
                <option>Edmonton</option> 
                <option>Calgary</option>  
                <option>Regina</option> 
                <option>Saskatoon</option>  
                <option>Winnipeg</option>   
                <option>Toronto</option>    
                <option>Mississauga</option>    
                <option>Ottawa</option>   
                <option>Montreal</option>   
            </datalist>
            <br/>
            {!validateEmail ?
              <p class="regisWrong">Email is not avaiable to use. Please use different email!</p>
              :
              <p className='ma1'></p>
            }
            <input
              class="regisSubmit"
              onClick={this.onSubmitRegister}
              type="submit" 
              value="Register"/>
            <p>Already have an account? <a href="SignIn">Sign in</a>.</p>  
          </div>
        </div>  
      </div>
    );
  }
}

export default Register; 
