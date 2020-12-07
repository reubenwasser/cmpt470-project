import React from 'react';
import "./ListSite.css"


const ListSite = ({list}) => {
	return (
		<div className='center ma2'>
			<table className="testTable" id ="testTable">
			<tr>
				<th>#</th>
				<th>Testing Site Name</th>
				<th>Website</th>
				<th>Contact Number</th>
				<th>Address</th>
				<th>City</th>
				<th>Province</th>
				<th>Zipcode</th>
			</tr>
			{list.map((element, index) => 
					<tr>
						<td>{`${index+1}`}</td>
						<td>{`${list[index].name}`}</td>
						<td><a href={`${list[index].website}`}>Website</a></td>
						<td>{`${list[index].phone}`}</td>
						<td>{`${list[index].street}`}</td>
						<td>{`${list[index].city}`}</td>
						<td>{`${list[index].province}`}</td>
						<td>{`${list[index].zipcode}`}</td>
					</tr>
				)
			}
			</table>
		</div>
	);
}

export default ListSite;