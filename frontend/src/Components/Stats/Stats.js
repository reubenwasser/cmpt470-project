import React from 'react'; 
import "./Stats.css"
import moment from 'moment'


class Stats extends React.Component {

	state = {
		loading: true,
		summary:[],
		date:'',

	};

	async componentDidMount(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "https://api.opencovid.ca/summary";
		const response = await fetch(proxyurl + url);
		const data = await response.json();

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
				<h1>Current Stats - Canada</h1>
				<h1 className="ReportDate">{this.state.date}</h1>
				<table>
					<tbody>
						<tr>
							<th>province</th>
							<th>New Cases</th>
							<th>Cumulative Cases</th>
							<th>New Deaths</th>
							<th>Cumulative Deaths</th>
						</tr>
				{this.state.summary.map((province_detial,index) => {
								
						return <tr key ={index}>
							<td>{province_detial.province}</td>
							<td>{province_detial.cases}</td>
							<td>{province_detial.cumulative_cases}</td>
							<td>{province_detial.deaths}</td>
							<td>{province_detial.cumulative_deaths}</td>
						</tr>
						
				})}
					</tbody>
				</table>
			</div>
		)
	}
}
			export default Stats;