import React, { Component } from 'react';
import "./UnauthMain.css"

class UnauthMain extends Component {
	
	render() {
		return(
			<div>
				<ul>
				  <li><a class="active" href="/">Home</a></li>
				  <li><a href="SignIn">Sign-in</a></li>
				  <li><a href="Register" on>Register</a></li>
				</ul>
				<h1>This is the Main Page Before loging in</h1>
			</div>
			
			
			



		)
	}
}

export default UnauthMain;