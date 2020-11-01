import React from 'react';
import './Register.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			password: '',
			dob: '',
			city: ''
		}
	}

	onNameChange = (event) => {
		this.setState({fullname: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	} 

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onDoBChange = (event) => {
		this.setState({dob: event.target.value})
	}

	onCityChange = (event) => {
		this.setState({city: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				fullname: this.state.fullname,
				email: this.state.email,
				password: this.state.password,
				dob: this.state.dob,
				city: this.state.city
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user){
				this.props.UserInfo(user);
				// change this to route signin later
				this.props.onRouteChange('main');
			}
		})
	}

	onKeyPressedRegister = (event) => {
		if(event.key === 'Enter'){
			this.onSubmitRegister();
		}
	} 

	render(){
		const {onRouteChange} = this.props;
		return(
			<div className='flex justify-around flex-row mv6'
				onKeyDown={this.onKeyPressRegister}>
				<div className='dib br3 ma3 w-40'>
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
				<div className='br3 ba'> 
					<form>
						<h1>Register Form</h1>
						<div>
					        <label className="fw6 lh-copy f5 ma3" htmlFor="full-name">Fullname:</label>
							<input className="ma3 w-70 input-reset" id="fn" type="text" name="fullname" size="50" placeholder="eg: Anderson Parker" 
								onfocus="this.placeholder = ''"
								onChange={this.onNameChange}/>
						</div>
						<div>
							<label className="fw6 lh-copy f5 ma3" htmlFor="email-address">Username: </label>
							<input className="ma3 w-70 input-reset" id="email" type="email" name="email" size="50" required
								placeholder="eg: example@email.com" 
								onfocus="this.placeholder = ''"
								onChange={this.onEmailChange}/>
						</div>
						<div className='flex justify-around flex-row'>
							<label className="fw6 lh-copy f5 ma3" htmlFor="password">Password: </label>
							<input className="ma3 w-70 input-reset" id="password" type="password" name="email" size="50" required
								placeholder="eg: bubbleteaislife" 
								onfocus="this.placeholder = ''"
								onChange={this.onPasswordChange}/>
						</div>
						<div>
							<label className="fw6 lh-copy f5 ma3" htmlFor="dob">Date of Birth: </label>
							<input className="ma3 w-60 input-reset" id="dob" type="date" name="dob" size="50" required 
								onChange={this.onDoBChange}/>
						</div>
						<div>
							<label className="fw6 lh-copy f5 ma3" htmlFor="city">City: </label>
							<input className="ma3 w-70 input-reset" id="dob" type="text" name="city" size="50" list="cities" required 
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
						</div>
						<div className="mb3">
				      		<input
				      			onClick={this.onSubmitRegister}
						      	className="b ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib" 
						      	type="submit" 
						      	value="Register"/>
				    	</div>
				    	<div className="ma3">
					    	<input
					    		onClick={() => onRouteChange('main')}
					      		className="b ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib" 
					      		type="submit" 
					      		value="Return to Main Page"/>
					    </div>

					</form>
				</div>
					
			</div>
		);
	}
}

export default Register;