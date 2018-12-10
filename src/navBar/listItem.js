import React from"react";

const Li =({url,value})=>{
	return(
		<a href={url}>
			<li>{value}</li>
		</a>
	);
}

export default Li;