import React from "react";
import Button from "../button/button"

const likeBtn=({className,clickFunc})=>{
	const likeBtnStyle={
		width:"50px",
		height:"40px",
		border:"none",
		borderRight:"2px dotted #000",
		backgroundColor:"#fff",
		color:"#F43209",
		fontSize:"1.7em"
	}
	// }glyphicon glyphicon-heart-empty
	return(
		<Button className={className} styles={likeBtnStyle} clickFunc={clickFunc}/>
	);
}

export default likeBtn;