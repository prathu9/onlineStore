import React from "react";
import Button from "../button/button";
import 	Img from "../imageElement/image";
import "./showCartPopup.css";
const ShowCart=({toggleDisplay, hideCart,image,cartItem})=>{

	

	const itemCheck=()=>{
		if(image){
			return (
				<div className="itemInCartContainer">
					<div className="itemInCart">
							<Img source={require(`../content/images/${image}.jpg`)}/>
					</div>
					<div className="itemInCartInfo">
						<h2>The Ateliar Tailored Coat</h2>
						<table className="priceTable">
							<tbody>
								<tr>
									<td>Price:</td>
									<td className="col-2">$499</td>
								</tr>
								<tr>
									<td>Quantity:</td>
									<td className="col-2">{cartItem}</td>
								</tr>
								<tr>
									<td>Total:</td>
									<td className="col-2">${cartItem*499}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			);
		}
		else{
			return(
				<div className="noItemInCart">
					<h1>No Items Added</h1>
				</div>
			);
		
		}
	}

	return(
		<div className="overlay" style={{display:`${toggleDisplay}`}}>
			<div className="showCartPopup">
				<h1>In Your Cart</h1>
				<Button 
				 className={"closePopupBtn"}
				 value={"X"}
				 clickFunc={hideCart}/>
				<div className="cardInfoContainer">
					{itemCheck()}
					
				</div>

				<Button 
				 className={"popupOkBtn"}
				 value={"Buy"}
				 />
			</div>
		</div>
	);

}

export default ShowCart;