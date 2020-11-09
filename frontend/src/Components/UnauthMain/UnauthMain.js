import React, { Component } from 'react';
import "./UnauthMain.css"

class UnauthMain extends Component {
	
	render() {
		return(
			<div>

				<ul class="nav">
				  <li class="navHome"><a class="active" href="/">Home</a></li>
          <li><a href="Stats">Stats</a></li>
				  <li class="navReg"><a href="Register" on>Register</a></li>
				  <li class="navSign"><a href="SignIn">Sign-in</a></li>

				</ul>
				<div class="bodyMain"> 
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
				
				
			</div>
			
			
		)
	}
}

export default UnauthMain;