import React from 'react'; 
import moment from 'moment'


import NavigationBar from '../NavigationBar/NavigationBar';
import "./Stats.css"
import map from "./canada_map.png"


class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
		{
			loading: true,
			summary:[],
			date:'',
			max:'',
			}
	};

	async componentDidMount(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "https://api.opencovid.ca/summary";
		const response = await fetch(proxyurl + url);
		var data = await response.json();
		
		//set the first one to compare the highest over all canada
		this.setState({max: (data.summary[0].cases) + (data.summary[0].deaths)});
		var max = this.state.max
		
		
		console.log((data.summary.length));
		Object.keys(data.summary).forEach(function(keyName) 
		{
			
			//console.log((data.summary[keyName].cases) + (data.summary[keyName].deaths))

			if(((data.summary[keyName].cases) + (data.summary[keyName].deaths)) >= (max))
			{
				max = (data.summary[keyName].cases) + (data.summary[keyName].deaths)
			};
		})
		// console.log(max)

		//calculate the safety rate
		Object.keys(data.summary).forEach(function(keyName) 
		{
			var rate = ((((data.summary[keyName].cases) + (data.summary[keyName].deaths))/max)*100*0.90).toFixed(3);
			data.summary[keyName].rate = rate;
			if(rate>= 70)
			{
				data.summary[keyName].risk = "High-Risk";
			}
			else if(rate < 70 && rate >= 20)
			{
				data.summary[keyName].risk = "Medium-Risk";
			}
			else
			{
				data.summary[keyName].risk = "Low-Risk";
			}
		})

		console.log(data.summary)


		var reportDate = moment(data.summary[0].date,"DD-MM-YYYY");
		var reportDateNewFormat = reportDate.format("YYYY, MMM DD")
		//console.log(reportDateNewFormat)
		//this.setState({summary:data.summary[0].province});
		this.setState({summary: data.summary});
		this.setState({date: reportDateNewFormat})
		//console.log(this.state.date);
	}
	
	render()
	{
		return(
			<div>
        <NavigationBar active='Stats' isSignIn={true} />

				<div className="statBody">
					<h1 className="Text">Current Stats - Canada</h1>
					<h3 className="Text1">Update @</h3>
					<h3 className="ReportDate">{this.state.date}</h3>
					<br></br>
					<table>
						<tbody>
							<tr>
								<th>Province</th>
								<th>New Cases</th>
								<th>Cumulative Cases</th>
								<th>New Deaths</th>
								<th>Cumulative Deaths</th>
								<th>Recovered</th>
								<th id="rate">Rate</th>
								<th id="risk">Risk</th>
							</tr>
					{this.state.summary.map((province_detial,index) => {
									
							return <tr key ={index}>
								<td>{province_detial.province}</td>
								<td>{province_detial.cases}</td>
								<td>{province_detial.cumulative_cases}</td>
								<td>{province_detial.deaths}</td>
								<td>{province_detial.cumulative_deaths}</td>
								<td>{province_detial.recovered}</td>
								<td>{province_detial.rate}</td>
								<td>{province_detial.risk}</td>
							</tr>
							
					})}
						</tbody>
					</table>
					{/* <img src="canada_map.png" alt="Italian Trulli"></img> */}
					<img className="statMap" src={map} alt="Logo"/>

				</div>
		
				
			</div>
		)
	}
}
			export default Stats;