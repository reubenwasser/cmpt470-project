import React from 'react'; 
import "./UserPage.css"
import ReactModal from 'react-modal';

class UserPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      showModal: false,
	      name: this.props.userInfo.name,
	      email: this.props.userInfo.email,
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

	    };
	    /*this.handleChange = this.handleChange.bind(this);*/
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
	}


	
  	handleChange = (e) => {
	    this.setState({
	      userSymptom: {
	      	[e.target.name]: e.target.value
	      }
	    })
	}

	

	/*SeePercent = (e) => {
		this.setState({
			total:  parseInt(this.state.fever) + 
					parseInt(this.state.cough) +
					parseInt(this.state.tired) + 
					parseInt(this.state.sore) +
					parseInt(this.state.diarrhoea) + 
					parseInt(this.state.aches) +
					parseInt(this.state.pink_eye) +
					parseInt(this.state.headache) +
					parseInt(this.state.no_taste) +
					parseInt(this.state.no_smell) +
					parseInt(this.state.rash) +
					parseInt(this.state.breathing) +
					parseInt(this.state.chest_pain) +
					parseInt(this.state.movement)

		}, function () {
			this.setState({total: (parseInt(this.state.total)/23)*100})	
		})	
	}*/


  
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ 
	    	showModal: false,
	    });
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
		document.getElementById('symptomTable2').style.display = "table";
		document.getElementById('closeView').style.display = "inline-block";
		document.getElementById('editSymp').style.display = "inline-block";
	}
	
	closeView () {
		document.getElementById('symptomTable').style.display = "none";
		document.getElementById('symptomTable2').style.display = "none";
		document.getElementById('closeView').style.display = "none";
		document.getElementById('editSymp').style.display = "none";

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
	    });
	    document.getElementById('symptomTable').style.display = "none";
		document.getElementById('symptomTable2').style.display = "none";
		document.getElementById('closeView').style.display = "none";
		document.getElementById('editSymp').style.display = "none";

	}


	render(){
		return(
			<div>
				<ul class="nav">
				  <li class="navUser"><a class="active">UserPage</a></li>
				  <li class="userLog"><a href="/">log-off</a></li>
				</ul>
				
				<div class="page_body">
					<h1>Hi {this.state.name}</h1>
					<h2> see your symptom </h2>
					<button onClick={this.onGetSymptoms}> view symptom </button>
					
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
					</table>
					<table id='symptomTable2'>
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
					<button onClick={this.closeView} id='closeView'> close view </button>
					<button onClick={this.handleOpenModal} id='editSymp'> edit symptom </button>
					

					
			        <ReactModal 
			        	isOpen={this.state.showModal}
			        	contentLabel="diag form"	
			        	className = "Modal"	
			        >
			        	<button class="close_form" onClick={this.handleCloseModal}>Cancel</button>
			        	<button class="edit_symptom" onClick={this.editSymp}>Done</button>

			   
			        	<div class="input_label">
				          	<label for='fever'> Do you have a fever: </label>
				          	<select name="fever" id="fever">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>	
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='cough'> Do you have a dry cough: </label>
				          	<select name="cough" id="cough">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='tired'> Do you feel tired all the time: </label>
				          	<select name="tired" id="tired">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='sore'>Do you have sore throat: </label>
				          	<select name="sore" id="sore">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='diarrhoea'>Do you have diarrhoea: </label>
				          	<select name="diarrhoea" id="diarrhoea">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='aches'>Do you have aches and pain: </label>
				          	<select name="aches" id="aches">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>				          		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='pink_eye'>Do you have conjunctivitis (pink_eye): </label>
				          	<select name="pink_eye" id="pink_eye">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='headache'>Do you have headache: </label>
				          	<select name="headache" id="headache">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='no_taste'>Do you have loss of taste: </label>
				          	<select name="no_taste" id="no_taste">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='no_smell'>Do you have loss of smell: </label>
				          	<select name="no_smell" id="no_smell">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='rash'>Do you have a rash on skin: </label>
				          	<select name="rash" id="rash">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='breathing'>Do you have a difficulty in breathing or shortness of breath: </label>
				          	<select name="breathing" id="breathing">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='chest_pain'>Do you have a chest pain or pressure: </label>
				          	<select name="chest_pain" id="chest_pain">
				          		<option value="no">No</option>
				          		<option value="yes">Yes</option>     		
				          	</select>
						</div>
						<div class="input_label">
				          	<label for='movement'>Do you have a loss of speech or movement: </label>
				          	<select name="movement" id="movement">
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