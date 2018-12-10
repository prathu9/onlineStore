import React from "react";
//import "../Header/Header.css";

const Button=({className,type,styles,value,clickFunc})=>{
	return(
		<button className={className} type={type} style={styles} onClick={clickFunc}>{value}</button>
	);
}

export default Button;