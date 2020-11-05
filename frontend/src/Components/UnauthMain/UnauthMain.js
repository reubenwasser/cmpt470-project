import React, { Component } from 'react';
import "../css/UnauthMain.css"

class UnauthMain extends Component {
	constructor(){
    super();
    this.state = {
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



 

	render() {
		return(
			<div>
				<ul>
				  <li><a class="active" href="/">Home</a></li>
				  <li><a href="Sign-in">Sign-in</a></li>
				  <li><a href="Register" on>Register</a></li>
				</ul>
				<h1>This is the Main Page Before loging in</h1>
			</div>
			
			
			



		)
	}
}

export default UnauthMain;