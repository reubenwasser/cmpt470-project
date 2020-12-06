import React from 'react'; 
import ReactModal from 'react-modal';

import NavigationBar from '../NavigationBar/NavigationBar';
import "./UserPage.css"


class UserPage extends React.Component {
	constructor(props) {
      super(props);
      const user = JSON.parse(sessionStorage.getItem('user'));
	    this.state = {
	      showModal: false,
	      name: user.name,
	      email: user.email,
	      userSymptom: {
	      	fever: "",
		    cough: "",
		    tired: "",
		    sore: "",
		    diarrhoea: "",
		    aches: "",
		    pink_eye: "",
		    headache: "",
		    no_taste: "",
		    no_smell: "",
		    rash: "",
		    breathing: "",
		    chest_pain: "",
		    movement: "",
	      },
	      prob: 0,
	      fever: 0,
		  cough: 0,
		  tired: 0,
		  sore: 0,
		  diarrhoea:0,
		  aches: 0,
		  pink_eye: 0,
		  headache: 0,
		  no_taste: 0,
		  no_smell: 0,
		  rash: 0,
		  breathing: 0,
		  chest_pain: 0,
		  movement:0,

	    };
	    this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	setUserSymptom = (data) => {
		this.setState({
			userSymptom: {
				fever: data.fever,
			    cough: data.cough,
			    tired: data.tired,
			    sore: data.sorethroat,
			    diarrhoea: data.diarrhoea,
			    aches: data.aches,
			    pink_eye: data.pinkeye,
			    headache: data.headache,
			    no_taste: data.notaste,
			    no_smell: data.nosmell,
			    rash: data.rash,
			    breathing: data.shortbreathing,
			    chest_pain: data.chestpain,
			    movement: data.diffmove,
			}
		})
		if (data.fever === 'yes')
		{
			this.setState({
				fever: 2
			})
		}
		if (data.cough === 'yes')
		{
			this.setState({
				cough: 2
			})
		}
		if (data.tired === 'yes')
		{
			this.setState({
				tired: 2
			})
		}
		if (data.sorethroat === 'yes')
		{
			this.setState({
				sore: 1
			})
		}
		if (data.diarrhoea === 'yes')
		{
			this.setState({
				diarrhoea: 1
			})
		}
		if (data.aches === 'yes')
		{
			this.setState({
				aches: 1
			})
		}
		if (data.pinkeye === 'yes')
		{
			this.setState({
				pink_eye: 1
			})
		}
		if (data.headache === 'yes')
		{
			this.setState({
				headache: 1
			})
		}
		if (data.notaste === 'yes')
		{
			this.setState({
				no_taste: 1
			})
		}
		if (data.nosmell === 'yes')
		{
			this.setState({
				no_smell: 1
			})
		}
		if (data.rash === 'yes')
		{
			this.setState({
				rash: 1
			})
		}
		if (data.shortbreathing === 'yes')
		{
			this.setState({
				breathing: 3
			})
		}
		if (data.chestpain === 'yes')
		{
			this.setState({
				chest_pain: 3
			})
		}
		if (data.diffmove === 'yes')
		{
			this.setState({
				movement: 3
			})
		}
	}

  
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ 
	    	showModal: false,
	    });
	}

	componentDidMount() {
  		window.onpopstate = () => {
  			this.props.CorrectSignIn(false);
  		}
	}
	
	onGetSymptoms = () => {
		fetch('/showSymptom', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email
				})

			})
		.then(response => response.json())
		.then(res => {
			/*console.log(res.symptom[0].fever)*/
			this.setUserSymptom(res.symptom[0]);
		})
		
		document.getElementById('symptomTable').style.display = "table";
		document.getElementById('closeView').style.display = "inline-block";
		document.getElementById('editSymp').style.display = "inline-block";
		document.getElementById('calPer').style.display = "inline-block";
	}
	
	closeView = () => {
		document.getElementById('symptomTable').style.display = "none";
		document.getElementById('closeView').style.display = "none";
		document.getElementById('editSymp').style.display = "none";
		document.getElementById('calPer').style.display = "none";
		document.getElementById('seeProb').style.display = "none";
		this.setState({
			prob: 0,
	    	fever: 0,
		  	cough: 0,
		  	tired: 0,
		  	sore: 0,
			diarrhoea:0,
			aches: 0,
			pink_eye: 0,
			headache: 0,
			no_taste: 0,
			no_smell: 0,
			rash: 0,
			breathing: 0,
			chest_pain: 0,
			movement:0,
		})

	}
	editSymp = () => {
		fetch('/editSymptom', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				fever: document.getElementById('fever').value,
				cough: document.getElementById('cough').value,
				tired: document.getElementById('tired').value,
				soreThroat: document.getElementById('sore').value,
				diarrhoea: document.getElementById('diarrhoea').value,
				aches: document.getElementById('aches').value,
				pinkEye: document.getElementById('pink_eye').value,
				headache: document.getElementById('headache').value,
				noTaste: document.getElementById('no_taste').value,
				noSmell: document.getElementById('no_smell').value,
				rash: document.getElementById('rash').value,
				shortBreathing: document.getElementById('breathing').value,
				chestPain: document.getElementById('chest_pain').value,
				diffMove: document.getElementById('movement').value,

			})

		})
		.then(response => response.json())
		this.setState({ 
	    	showModal: false,
	    	prob: 0,
	    	fever: 0,
		  	cough: 0,
		  	tired: 0,
		  	sore: 0,
			diarrhoea:0,
			aches: 0,
			pink_eye: 0,
			headache: 0,
			no_taste: 0,
			no_smell: 0,
			rash: 0,
			breathing: 0,
			chest_pain: 0,
			movement:0,
	    });
	    document.getElementById('symptomTable').style.display = "none";
		document.getElementById('closeView').style.display = "none";
		document.getElementById('editSymp').style.display = "none";
		document.getElementById('calPer').style.display = "none";
		document.getElementById('seeProb').style.display = "none";

	}
	calProb = () => {
		document.getElementById('seeProb').style.display = "block";
		
		this.setState({
			prob: (((this.state.fever + this.state.cough + this.state.tired + this.state.sore + this.state.diarrhoea + this.state.aches + this.state.pink_eye + this.state.headache + this.state.no_taste + this.state.no_smell + this.state.rash + this.state.breathing + this.state.chest_pain + this.state.movement)/23)*100).toFixed(2)
		})

	}

	render(){
		return(
			<div>
        <NavigationBar active='UserPage' isSignIn={true} />
				
				<div class="page_body">
					<h1>Hi {this.state.name}, </h1>
					<h2>Welcome to Coronavirus (COVID-19) Self-Checker/Tracker. </h2>
					<p class="text1"> To track or check your symptoms for COVID-19 click the button down below</p>
					<button class="viewAllSymp" onClick={this.onGetSymptoms}> view symptoms </button>
					
					<table id='symptomTable'>
						<tr>
							<th>Fever</th>
							<th>Cough</th>
							<th>Tiredness</th>
							<th>Sore throat</th>
							<th>Diarrhoea</th>
							<th>Aches</th>
							<th>Conjunctivitis</th>
						</tr>
						<tr>
							<td>{this.state.userSymptom.fever}</td>
							<td>{this.state.userSymptom.cough}</td>
							<td>{this.state.userSymptom.tired}</td>
							<td>{this.state.userSymptom.sore}</td>
							<td>{this.state.userSymptom.diarrhoea}</td>
							<td>{this.state.userSymptom.aches}</td>
							<td>{this.state.userSymptom.pink_eye}</td>
						</tr>
						<tr>
							<th>Headache</th>
							<th>Loss of taste</th>
							<th>Loss of smell</th>
							<th>Rash</th>
							<th>Difficult breathing</th>
							<th>Chest pain</th>
							<th>Loss of speech or movement</th>
						</tr>
						<tr>
							<td>{this.state.userSymptom.headache}</td>
							<td>{this.state.userSymptom.no_taste}</td>
							<td>{this.state.userSymptom.no_smell}</td>
							<td>{this.state.userSymptom.rash}</td>
							<td>{this.state.userSymptom.breathing}</td>
							<td>{this.state.userSymptom.chest_pain}</td>
							<td>{this.state.userSymptom.movement}</td>
						</tr>
					</table>
				
					<button id='closeView' onClick={this.closeView}> close view </button>
					<button id='editSymp' onClick={this.handleOpenModal}> edit symptoms </button>
					<button id='calPer' onClick={this.calProb}>Calculate the probability of you having CODIV-19</button>
					<p id='seeProb'>The probability of you having COVID-19 is <span> {this.state.prob}%</span> </p>
					<p id='text2'>The Coronavirus Self-Checker/Tracker is an interactive clinical assessment tool that will assist individuals ages 13 and older, and parents and caregivers of children ages 2 to 12 on deciding when to seek testing or medical care if they suspect they or someone they know has contracted COVID-19 </p>

					
			        <ReactModal 
			        	isOpen={this.state.showModal}
			        	contentLabel="diag form"	
			        	className = "Modal"	
			        >
			        	<button className="close_form" onClick={this.handleCloseModal}>Cancel</button>
			        	<button className="edit_symptom" onClick={this.editSymp}>Done</button>

			   
			        	<div className="input_label">
				          	<label for='fever'> Do you have a fever: </label>
				          	<select name="fever" id="fever">
				          		<option value={this.state.userSymptom.fever}>{this.state.userSymptom.fever}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>	
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='cough'> Do you have a dry cough: </label>
				          	<select name="cough" id="cough">
				          		<option value={this.state.userSymptom.cough}>{this.state.userSymptom.cough}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='tired'> Do you feel tired all the time: </label>
				          	<select name="tired" id="tired">
				          		<option value={this.state.userSymptom.tired}>{this.state.userSymptom.tired}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='sore'>Do you have sore throat: </label>
				          	<select name="sore" id="sore">
				          		<option value={this.state.userSymptom.sore}>{this.state.userSymptom.sore}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='diarrhoea'>Do you have diarrhoea: </label>
				          	<select name="diarrhoea" id="diarrhoea">
				          		<option value={this.state.userSymptom.diarrhoea}>{this.state.userSymptom.diarrhoea}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='aches'>Do you have aches and pain: </label>
				          	<select name="aches" id="aches">
				          		<option value={this.state.userSymptom.aches}>{this.state.userSymptom.aches}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='pink_eye'>Do you have conjunctivitis (pink_eye): </label>
				          	<select name="pink_eye" id="pink_eye">
				          		<option value={this.state.userSymptom.pink_eye}>{this.state.userSymptom.pink_eye}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='headache'>Do you have headache: </label>
				          	<select name="headache" id="headache">
				          		<option value={this.state.userSymptom.headache}>{this.state.userSymptom.headache}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='no_taste'>Do you have loss of taste: </label>
				          	<select name="no_taste" id="no_taste">
				          		<option value={this.state.userSymptom.no_taste}>{this.state.userSymptom.no_taste}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='no_smell'>Do you have loss of smell: </label>
				          	<select name="no_smell" id="no_smell">
				          		<option value={this.state.userSymptom.no_smell}>{this.state.userSymptom.no_smell}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='rash'>Do you have a rash on skin: </label>
				          	<select name="rash" id="rash">
				          		<option value={this.state.userSymptom.rash}>{this.state.userSymptom.rash}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='breathing'>Do you have a difficulty in breathing or shortness of breath: </label>
				          	<select name="breathing" id="breathing">
				          		<option value={this.state.userSymptom.breathing}>{this.state.userSymptom.breathing}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='chest_pain'>Do you have a chest pain or pressure: </label>
				          	<select name="chest_pain" id="chest_pain">
				          		<option value={this.state.userSymptom.chest_pain}>{this.state.userSymptom.chest_pain}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div className="input_label">
				          	<label for='movement'>Do you have a loss of speech or movement: </label>
				          	<select name="movement" id="movement">
				          		<option value={this.state.userSymptom.movement}>{this.state.userSymptom.movement}</option>
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>


			        </ReactModal>






					
				</div>
			</div>
		)
	}
		
	
}
export default UserPage;