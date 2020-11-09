import React, { Component } from 'react';
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
				<ul>
				  <li><a href="/">Home</a></li>
				  <li><a className="active" href="SignIn">Sign-in</a></li>
				  <li><a href="Register" on>Register</a></li>
				  <li><a href="Stats">Stats</a></li>
          <li><a href="Map">Map</a></li>
				</ul>

				<div>
					<div class="formPopup" id="usersForm" >
			          <div class="addUserForm">
			            <h1 class="label_title">Sign In</h1>
			            <label>Username: </label>
			            <input className='ma1' id="email" 
			                type="email" 
			                name="email" 
			                size="50" required 
			                placeholder="eg: example@email.com" 
			                onChange={this.onEmailChange}/>
			            <br/>
			            <label>Password: </label>
			            <input className='ma' id="password" type="password" name="email" size="50" required
			                placeholder="eg: bubbleteaislife" 
			                onfocus="this.placeholder = ''"
			                onChange={this.onPasswordChange}/>
			            <br/>
			            {!isCorrect ?
				      		<p className='red ma1'>Wrong username or password.</p>
				      		:
				      		<p className='ma1'></p>
				      	}
			            <input
			            	className='ma1'
			            	onClick={this.onSubmitSignin}
			            	type="submit" 
			            	value="Sign in"/>
			            <a href="Register" className='pointer f6 dib' on>Forgot your password?</a>   
			          </div>
			        </div>  
				</div>
			</div>

		)
	}
}

export default SignIn;
