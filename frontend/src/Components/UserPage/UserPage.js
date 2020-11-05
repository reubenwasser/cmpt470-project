import React from 'react'; 
import "../css/UserPage.css"



class UserPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      total: "0",
	      fever: "0",
	      cough: "0",
	      tired: "0",
	      sore: "0",
	      diarrhoea: "0",
	      percent: "0"

	    };
	    this.handleChange = this.handleChange.bind(this);
	  }

	
  	handleChange(e) {
	    this.setState({
	      [e.target.name]: parseInt(e.target.value)
	    })
	  }

	SeePercent = (e) => {
		this.setState({
			total: parseInt(this.state.fever) + parseInt(this.state.cough)+parseInt(this.state.tired)+parseInt(this.state.sore)+parseInt(this.state.diarrhoea)
		}, function () {
			this.setState({percent: (parseInt(this.state.total)/5)*100},function () {
				window.alert("the percentage of you having COVID is :  " + this.state.percent);
			})
			
		})
		
	}


	render(){
		return(
			<div>
				<ul>
				  <li><a class="active" href="/UserPage">UserPage</a></li>
				  <li><a href="/">log-off</a></li>
				</ul>
				<div class="diagForm" id="diagForm">
					<h1>Check if you have COVID</h1>

					<div onChange={this.handleChange}>
						<h3>Do you have a fever</h3>
						<input type="radio" id="fever_yes" name="fever" value="1"/>
						<label for="fever_yes">Yes</label>
						<input type="radio" id="fever_no" name="fever" value="0"/>
						<label for="fever_no">No</label><br/>
					</div>
					<div onChange={this.handleChange}>
						<h3>Do you have a dry cough</h3>
						<input type="radio" id="cough_yes" name="cough" value="1"/>
						<label for="cough_yes">Yes</label>
						<input type="radio" id="cough_no" name="cough" value="0"/>
						<label for="cough_no">No</label><br/>
					</div>
					<div onChange={this.handleChange}>
						<h3>Do you feel tired all the time</h3>
						<input type="radio" id="tired_yes" name="tired" value="1"/>
						<label for="tired_yes">Yes</label>
						<input type="radio" id="tired_no" name="tired" value="0"/>
						<label for="tired_no">No</label><br/>
					</div>
					<div onChange={this.handleChange}>
						<h3>Do you have sore throat</h3>
						<input type="radio" id="sore_yes" name="sore" value="1"/>
						<label for="sore_yes">Yes</label>
						<input type="radio" id="sore_no" name="sore" value="0"/>
						<label for="sore_no">No</label><br/>
					</div>
					<div onChange={this.handleChange}>
						<h3>Do you have diarrhoea</h3>
						<input type="radio" id="diarrhoea_yes" name="diarrhoea" value="1"/>
						<label for="diarrhoea_yes">Yes</label>
						<input type="radio" id="diarrhoea_no" name="diarrhoea" value="0"/>
						<label for="diarrhoea_no">No</label><br/><br/>
					</div>

					<button onClick={this.SeePercent} value="5">Check</button>


					
				</div>
			</div>
		)
	}
		
	
}
export default UserPage;