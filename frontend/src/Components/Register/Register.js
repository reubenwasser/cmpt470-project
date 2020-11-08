import React from 'react';
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
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="SignIn">Sign-in</a></li>
          <li><a class="active" href="Register">Register</a></li>
        </ul>
        <div className='text'>
          <h1>Did you know?</h1>
          <p><strong>Coronavirus disease (COVID-19)</strong> is an infectious 
              disease caused by a newly discovered coronavirus. </p>
          <p>Most people infected with the COVID-19 virus will experience 
            mild to moderate respiratory illness and recover without 
            requiring special treatment.  Older people, and those with 
            underlying medical problems like cardiovascular disease, 
            diabetes, chronic respiratory disease, and cancer are more 
            likely to develop serious illness.</p>
          <details>
              <summary>Read more!!!</summary>
                <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">WHO CoronaVirus Information</a>
          </details> 
        </div>
        <div class="formPopup" id="usersForm" >
          <div class="addUserForm">
            <h1 class="label_title">Register</h1>
            <label>Full Name : </label>
            <input 
              className='ma1'
              id="fn" 
              type="text" 
              name="fullname" 
              placeholder="eg: Anderson Parker" 
              onChange={this.onNameChange}/>
            <br/>
            <label>UserName : </label>
            <input 
              className='ma1'
              id="email" 
              type="email" 
              name="email" 
              size="50" required 
              placeholder="eg: example@email.com" 
              onChange={this.onEmailChange}/>
            <br/>
            <label>password: </label>
            <input
              className='ma1' 
              id="password" 
              type="password" 
              name="email" 
              size="50" 
              required
              placeholder="eg: bubbleteaislife" 
              onfocus="this.placeholder = ''"
              onChange={this.onPasswordChange}/>
            <br/>
            <label>Date of Birth: </label>
            <input
              className='ma1' 
              id="dob" 
              type="date" 
              name="dob" 
              size="50" required 
              onChange={this.onDoBChange}/>
            <br/>
            <label>City: </label>
            <input
              className='ma1' 
              id="city" 
              type="text" 
              name="city" 
              size="50" 
              list="cities" required 
              onChange={this.onCityChange}/>
            <datalist id="cities">
                <option>Vancouver</option>
                <option>Victoria</option> 
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
              <p className='red ma1'>Email is not avaiable to use. Please use different email!</p>
              :
              <p className='ma1'></p>
            }
            <input
              className='ma1'
              onClick={this.onSubmitRegister}
              type="submit" 
              value="Register"/>
            <a href="SignIn" className='ma1 secret dim pointer f6 dib br2' on>Return to Sign-in</a>   
          </div>
        </div>  
      </div>
    );
  }
}

export default Register; 
