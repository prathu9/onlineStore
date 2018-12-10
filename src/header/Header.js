import React,{Component} from "react";
import Button from "../button/button";
import "./Header.css";


class Header extends Component{

	constructor(){
		super();
		this.state={
			flag:"usd"
		}
	}

	changeFlag=()=>{
		if(this.state.flag==="usd"){
			this.setState({flag:"inr"});
		}
		else{
			this.setState({flag:"usd"})

		}
	}


	render(){

		const buttonValue=(()=>{
			return(
				<span>
					<span 
						className="glyphicon glyphicon-shopping-cart">
					</span>
					<span className="cartName">
						Cart
					</span>
					<span className="cartValue">
						({this.props.cartItem})
					</span>
				</span>
			)
		})();
		return(
			<div className="header_wrapper">
				<div className="header_container">
				<div className="countryBtn">
					<img src={require(`./images/${this.state.flag}.jpg`)} alt="" width="40px" height="30px"/>
					<select onChange={this.changeFlag} style={{border:"0"}}>
						<option>USD</option>
						<option>INR</option>
					</select>
				</div>
					<h1>BONFIRE</h1>
					<div className="addCartDiv">
					
						
						<Button 
							className="addCartBtn"
							value={buttonValue}
							clickFunc={this.props.showCart}/>	
					</div>
				</div>
			</div>
		);
	}
}


export default Header;


	// newItemAdded=()=>{
	// 	this.setState({
	// 		noOfItemsInCart:this.state.noOfItemsInCart+1
	// 	})
	// }
	// <Button styles={addCartBtn} value="Add to Cart" clickFunc={this.newItemAdded}/>
	// const addCartBtn={
	// 		width:"120px",
	// 		height:"50px",
	// 		backgroundColor:"#000",
	// 		border:"2px solid black",
	// 		color:"#fff"
	// 	}