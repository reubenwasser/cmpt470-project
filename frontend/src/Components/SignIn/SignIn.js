import React, { Component } from 'react';
import "../css/SignIn.css"

class SignIn extends Component {
	
	render() {
		return(
			<div>
				<ul>
				  <li><a href="/">Home</a></li>
				  <li><a class="active" href="SignIn">Sign-in</a></li>
				  <li><a href="Register" on>Register</a></li>
				</ul>
				<h1>this is where the sign in page should be</h1>
			</div>

		)
	}
}

export default SignIn;