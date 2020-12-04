import React, { Component } from 'react';
import "./TestingSite.css";
import ListSite from "./ListSite";

class TestingSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			list: []
		}
	}

	onCityChange = (event) => {
		this.setState({city: event.target.value})
	} 

	onSubmitCity = (event) => {
		fetch('/testing', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				city: this.state.city,
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			this.setState({list: data});
		})
	}

	render(){
		const {list} = this.state;
		return(
			<div>
				<ul class="nav">
				  <li class="navUser"><a href="/UserPage">UserPage</a></li>
				  <li class="navUser"><a class="active" href="/TestingSite">TestingSite</a></li>
				  <li class="userLog"><a href="/">log-off</a></li>
				</ul>

				<div className='center container'>
					<div className='form pa4 br3 shadow-3'>
						<input 
							className='f4 pa2 w-30 center' 
							type='text' 
							placeholder='Where do you live?'
							onChange={this.onCityChange}/>
						<button 
							className='grow w-10 f4 link ph3 pv2 dib white bg-green'
							onClick={this.onSubmitCity}>Find
						</button>
					</div>
				</div>
				<ListSite list={list}/>
			</div>
		)
	}
}

export default TestingSite;