import React from 'react';

const ListSite = ({list}) => {
	return (
		<div className='center ma2'>
			{list.map((element, index) => 
				<table>
					<tr>
						<td>{`${index+1}`}</td>
						<td>{`${list[index].name}`}</td>
						<td><a href={`${list[index].website}`}>Link</a></td>
						<td>{`${list[index].phone}`}</td>
						<td>{`${list[index].street}`}</td>
						<td>{`${list[index].city}`}</td>
						<td>{`${list[index].province}`}</td>
						<td>{`${list[index].zipcode}`}</td>
					</tr>
				</table>)
			}
		</div>
	);
}

export default ListSite;