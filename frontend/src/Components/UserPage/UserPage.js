import React from 'react'; 
import "./UserPage.css"
import ReactModal from 'react-modal';

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
	      aches: "0",
	      pink_eye: "0",
	      headache: "0",
	      no_taste: "0",
	      no_smell: "0",
	      rash: "0",
	      breathing: "0",
	      chest_pain: "0",
	      movement: "0",
	      showModal: false

	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	  }

	
  	handleChange(e) {
	    this.setState({
	      [e.target.name]: parseInt(e.target.value)
	    })
	  }

	SeePercent = (e) => {
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
	}


  
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ 
	    	showModal: false,
	    	fever: "0",
			cough: "0",
		    tired: "0",
		    sore: "0",
		    diarrhoea: "0",
		    aches: "0",
	      	pink_eye: "0",
	      	headache: "0",
	      	no_taste: "0",
	      	no_smell: "0",
	      	rash: "0",
	      	breathing: "0",
	      	chest_pain: "0",
	      	movement: "0",
		    total:0
	    });
	}




	render(){
		return(
			<div>
				<ul>
				  <li><a class="active" href="/UserPage">UserPage</a></li>
          <li><a href="/Map">Map</a></li>
				  <li><a href="/">log-off</a></li>
				</ul>
				<div class="page_body">
					<h1>Check if you have COVID</h1>
					<button onClick={this.handleOpenModal}>Open Form</button>
					
			        <ReactModal 
			        	isOpen={this.state.showModal}
			        	contentLabel="diag form"	
			        	className = "Modal"	
			        >
			        	<button class="close_form" onClick={this.handleCloseModal}>Cancel</button>
			        	<button class="check_per" onClick={this.SeePercent}>Check</button>
			   
			        	<div class="input_label" onChange={this.handleChange}>
				          	<h3>Do you have a fever</h3>
							<input class="input_yes" type="radio" id="fever_yes" name="fever" value="2"/>
							<label for="fever_yes">Yes</label>
							<input class="input_no" type="radio" id="fever_no" name="fever" value="0"/>
							<label for="fever_no">No</label><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have a dry cough</h3>
							<input class="input_yes" type="radio" id="cough_yes" name="cough" value="2"/>
							<label for="cough_yes">Yes</label>
							<input class="input_no" type="radio" id="cough_no" name="cough" value="0"/>
							<label for="cough_no">No</label><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you feel tired all the time</h3>
							<input class="input_yes" type="radio" id="tired_yes" name="tired" value="2"/>
							<label for="tired_yes">Yes</label>
							<input class="input_no" type="radio" id="tired_no" name="tired" value="0"/>
							<label for="tired_no">No</label><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have sore throat</h3>
							<input class="input_yes" type="radio" id="sore_yes" name="sore" value="1"/>
							<label for="sore_yes">Yes</label>
							<input class="input_no" type="radio" id="sore_no" name="sore" value="0"/>
							<label for="sore_no">No</label><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have diarrhoea</h3>
							<input class="input_yes" type="radio" id="diarrhoea_yes" name="diarrhoea" value="1"/>
							<label for="diarrhoea_yes">Yes</label>
							<input class="input_no" type="radio" id="diarrhoea_no" name="diarrhoea" value="0"/>
							<label for="diarrhoea_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have aches and pain</h3>
							<input class="input_yes" type="radio" id="aches_yes" name="aches" value="1"/>
							<label for="aches_yes">Yes</label>
							<input class="input_no" type="radio" id="aches_no" name="aches" value="0"/>
							<label for="aches_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have conjunctivitis (pink_eye)</h3>
							<input class="input_yes" type="radio" id="pink_eye_yes" name="pink_eye" value="1"/>
							<label for="pink_eye_yes">Yes</label>
							<input class="input_no" type="radio" id="pink_eye_no" name="pink_eye" value="0"/>
							<label for="pink_eye_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have headache</h3>
							<input class="input_yes" type="radio" id="headache_yes" name="headache" value="1"/>
							<label for="headache_yes">Yes</label>
							<input class="input_no" type="radio" id="headache_no" name="headache" value="0"/>
							<label for="headache_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have loss of taste</h3>
							<input class="input_yes" type="radio" id="no_taste_yes" name="no_taste" value="1"/>
							<label for="no_taste_yes">Yes</label>
							<input class="input_no" type="radio" id="no_taste_no" name="no_taste" value="0"/>
							<label for="no_taste_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have loss of smell</h3>
							<input class="input_yes" type="radio" id="no_smell_yes" name="no_smell" value="1"/>
							<label for="no_smell_yes">Yes</label>
							<input class="input_no" type="radio" id="no_smell_no" name="no_smell" value="0"/>
							<label for="no_smell_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have a rash on skin, or discolouration of fingers or toes</h3>
							<input class="input_yes" type="radio" id="rash_yes" name="rash" value="1"/>
							<label for="rash_yes">Yes</label>
							<input class="input_no" type="radio" id="no_smell_no" name="rash" value="0"/>
							<label for="rash_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have a difficulty in breathing or shortness of breath</h3>
							<input class="input_yes" type="radio" id="breathing_yes" name="breathing" value="3"/>
							<label for="breathing_yes">Yes</label>
							<input class="input_no" type="radio" id="breathing_no" name="breathing" value="0"/>
							<label for="breathing_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have a chest pain or pressure</h3>
							<input class="input_yes" type="radio" id="chest_pain_yes" name="chest_pain" value="3"/>
							<label for="chest_pain_yes">Yes</label>
							<input class="input_no" type="radio" id="breathing_no" name="chest_pain" value="0"/>
							<label for="chest_pain_no">No</label><br/><br/>
						</div>
						<div class="input_label" onChange={this.handleChange}>
							<h3>Do you have a loss of speech or movement</h3>
							<input class="input_yes" type="radio" id="movement_yes" name="movement" value="3"/>
							<label for="movement_yes">Yes</label>
							<input class="input_no" type="radio" id="movement_no" name="movement" value="0"/>
							<label for="movement_no">No</label><br/><br/>
						</div>
					
						<h2 class="show_per">The percentage of you having COVID-19 is {this.state.total}</h2>
					

			        </ReactModal>






					
				</div>
			</div>
		)
	}
		
	
}
export default UserPage;