import React from 'react'; 

class home extends React.Component {
	render(){
		return(
			<div>
				<ul>
				  <li><a class="active" href="/UserPage">UserPage</a></li>
				  <li><a href="/">log-off</a></li>
				</ul>
				<h1>This is the Main Page after loging in</h1>
			</div>
		)
	}
		
	
}
export default home;