import React, { Component } from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import "./SignIn.css"

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			isCorrect: true
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	} 

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignin = () => {
		fetch('/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data === 'Wrong credential'){
				this.setState({isCorrect: false})
			}
			else{
				this.props.CorrectSignIn(true);
				this.props.UserInfo(data);
		        this.props.history.push('/UserPage');
			}
		})
	}

	onKeyPressedSignin = (event) => {
		if(event.key === 'Enter'){
			this.onSubmitSignin();
		}
	}


	render() {
		const {isCorrect} = this.state;
		return(
			<div>

        <NavigationBar active='SignIn' isSignIn={false} />

				<div onKeyDown={this.onKeyPressedSignin}>
			          <div class="addUserForm">
			            <h1 class="label_title">Sign In</h1>
			            <label>Username: </label><br/><br/>
			            <input class="signInput" 
			            	id="email" 
			                type="email" 
			                name="email" 
			                size="50" required 
			                placeholder="eg: example@email.com" 
			                onChange={this.onEmailChange}/>
			            <br/><br/>
			            <label>Password: </label><br/><br/>
			            <input class="signInput" id="password" type="password" name="email" size="50" required
			                placeholder="eg: bubbleteaislife" 
			                onfocus="this.placeholder = ''"
			                onChange={this.onPasswordChange}/>
			            <br/><br/>
			            {!isCorrect ?
				      		<p class="signWrong">Wrong username or password.</p>
				      		:
				      		<p className='ma1'></p>
				      	}
				      	<a class="signForgot" href="Register">Forgot your password?</a><br/>
			            <input
			            	class="signSubmit"
			            	onClick={this.onSubmitSignin}
			            	type="submit" 
			            	value="Sign in"/>
			               
			          </div>
			        </div>  
				
			</div>

		)
	}
}

export default SignIn;
