import React from 'react';

const ListSite = ({list}) => {
	return (
		<div className='center ma2'>
			{list.map((element, index) => 
				<table>
					<tr>
						<td>{`${index+1}`}</td>
						<td>{`${list[index].Name}`}</td>
						<td><a href={`${list[index].Website}`}>Link</a></td>
						<td>{`${list[index].Phone}`}</td>
						<td>{`${list[index].Street}`}</td>
						<td>{`${list[index].City}`}</td>
						<td>{`${list[index].Province}`}</td>
						<td>{`${list[index].PostalCode}`}</td>
					</tr>
				</table>)
			}
		</div>
	);
}

export default ListSite;