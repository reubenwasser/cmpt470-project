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
			total: parseInt(this.state.fever) + parseInt(this.state.cough)+parseInt(this.state.tired)+parseInt(this.state.sore)+parseInt(this.state.diarrhoea),
			fever: "0",
			cough: "0",
		    tired: "0",
		    sore: "0",
		    diarrhoea: "0",
		}, function () {
			this.setState({total: (parseInt(this.state.total)/5)*100},function () {
				window.alert("the percentage of you having COVID is :  " + this.state.total);
			})	
		})	
	}


  
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ showModal: false });
	}




	render(){
		return(
			<div>
				<ul>
				  <li><a class="active" href="/UserPage">UserPage</a></li>
				  <li><a href="/">log-off</a></li>
				</ul>
				<div class="page_body">
					<h1>Check if you have COVID</h1>
					<button onClick={this.SeePercent} value="5">Check</button>
					<button onClick={this.handleOpenModal}>Open Form</button>
			        <ReactModal 
			           isOpen={this.state.showModal}
			           contentLabel="diag form"			           
			        >
			          <button onClick={this.handleCloseModal}>Cancel</button>
			          
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
					

			        </ReactModal>






					
				</div>
			</div>
		)
	}
		
	
}
export default UserPage;