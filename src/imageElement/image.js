import React from "react";


const Img=({className,source})=>{

	return(
		<img className={className} src={source} alt="not found"/>
	);

}


export default Img;