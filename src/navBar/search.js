import React from "react";
import Button from "../button/button";

const search=()=>{

	const searchBtnStyle={
		width:"50px",
		height:"40px",
		border:"none",
		backgroundColor:"#fff",
		fontSize:"1.7em"
	}

	return(
		<Button className="glyphicon glyphicon-search" styles={searchBtnStyle}/>

	);
}


export default search;