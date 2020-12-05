import React, { Component } from 'react';

import ListSite from './ListSite';
import NavigationBar from '../NavigationBar/NavigationBar';
import './TestingSite.css';

class TestingSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			noresult: false,
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
			// console.log(data);
			if (data === 'No result'){
				this.setState({noresult: true})
			}
			else{
				this.setState({noresult: false})
				this.setState({list: data});
			}
		})
	}

	render(){
		const {list, noresult} = this.state;
		return(
			<div>
        <NavigationBar active='TestingSite' isSignIn={true} />

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
	            {noresult ?
		      		<p class='signWrong'>No result found</p>
		      		:
		      		<ListSite list={list}/>
		      	}
				
			</div>
		)
	}
}

export default TestingSite;