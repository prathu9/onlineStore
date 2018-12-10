import React from "react";

export const Input =({label,className,type,name,placeholder,min,changeFunc,value})=>{
	
	return(
		<div className={className}>
			<label>{label}</label>
			<input  className={`${className}Btn`}
					type={type}
					name={name}
					value={value}
					onChange={changeFunc}
					placeholder={placeholder} 
					min={min}
					required/>
		</div>
	);
}

export const Select=({label,option,name,className,placeholder,changeFunc})=>{

	const placeholderValue=(()=>{	
			if(placeholder){
					return <option value="">{placeholder}</option>
			}
	})();

	const optionlist=option.map((item)=>{
		return <option key={item} value={item}>{item}</option>
	})

	return(
		<div className={className}>
			<label>{label}</label><br/>
			<select  onChange={changeFunc} name={name} required="required">
				{placeholderValue}
				{optionlist}		
			</select>
		</div>
	);
}

