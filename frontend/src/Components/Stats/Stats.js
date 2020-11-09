import React from 'react'; 
import "./Stats.css"
import moment from 'moment'
import map from "./canada_map.png"


class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
		{
			loading: true,
			summary:[],
			date:'',
			}
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
				<ul class="nav">
				  <li class="navHome"><a href="/">Home</a></li>
				  <li class="navStat"><a class="active" href="Stats">Stats</a></li>
				  <li class="navReg"><a href="Register" on>Register</a></li>
				  <li class="navSign"><a href="SignIn">Sign-in</a></li>
				</ul>
				<div class="statBody">
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
					{/* <img src="canada_map.png" alt="Italian Trulli"></img> */}
					<img class="statMap" src={map} alt="Logo"/>
				</div>
		
				
			</div>
		)
	}
}
			export default Stats;