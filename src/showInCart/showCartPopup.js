import React from "react";
import Button from "../button/button";
import 	Img from "../imageElement/image";
import "./showCartPopup.css";
const ShowCart=({toggleDisplay, hideCart,image,cartItem,flag})=>{

	const currency =  flag==="usd"? `$ ${cartItem*199}` : `Rs ${cartItem*9999}` ;
	const displayCurrency = flag==="usd"?"$ 199":"Rs 9999";

	const itemCheck=()=>{
		console.log(image);
		if(image){
			return (
				<div className="itemInCartContainer">
					<div className="itemInCart">
							<Img source={image}/>
					</div>
					<div className="itemInCartInfo">
						<h2>The Ateliar Tailored Coat</h2>
						<table className="priceTable">
							<tbody>
								<tr>
									<td>Price:</td>
									<td className="col-2">
										{displayCurrency}
									</td>
								</tr>
								<tr>
									<td>Quantity:</td>
									<td className="col-2">{cartItem}</td>
								</tr>
								<tr>
									<td>Total:</td>
									<td className="col-2">{currency}</td>
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