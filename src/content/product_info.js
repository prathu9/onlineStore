import React, {Component} from "react";
import {Input, Select} from "../input/input.js";
import Button from "../button/button";

class ImgInfo extends Component{
	constructor(props){
		super(props);
		this.state={
			color:"",
			size:"",
			qty:0,
		}
		// this.handlChange=this.handleChange.bind(this);
	}

	handleChange=({target})=>{
		
		this.setState({
			[target.name]:target.value
		})
		
		console.log(this.state.color,this.state.size,this.state.qty);
}

	

	handleSubmit=(e)=>{
		console.log("hi",this.state.color,this.state.size,this.state.qty);
		this.props.getCartItem(this.state.qty);
		this.props.getCartInfo(this.state.color,this.state.size,this.props.currentProductImg)
		e.preventDefault();
	}

	render(){
		return(
			<div className="imgInfo_container">
				<div className="imgInfoTitle">
					<p> &lt; Back to <a href="#women">Women</a></p>
					<h2>The Atelier Tailored Coat</h2>
					<div style={{margin:"20px 0"}}>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#ddd",marginRight:"5px"}}></i>
						 3Reviews(s) | <a href="#review" style={{textDecoration:"underline",color:"#000"}}>ADD A REVIEW</a>	
					</div>
				</div>
				<p style={{fontSize:"1.7em"}}>
					{this.props.flag==="usd"?`$199`:`Rs 9,999`}
				</p>
				<ul>
					<li><span style={{fontWeight:"bold"}}>Availabilty</span>:In stock</li>
					<li><span style={{fontWeight:"bold"}}>Product Code</span>:#4657</li>
					<li><span style={{fontWeight:"bold"}}>Tags</span>:Fashion,Hood,Classic</li>
				</ul>

				<p style={{marginBottom:"20px"}}>
					Sleek, polished and boasting an impeccably modern fit, this blue,
					2-button Lazio suit features a notch lapel, flap pockets, and 
					accompanying flat front trousers-all in pure wool by Vitale Barberis
					Canonico.
				</p>
				
					<ul>
						<li>Dark blue suit for a tone-on-tone look</li>
						<li>Regular fit</li>
						<li>100% Cotten</li>
						<li>Free Shipping with 4 days delivery</li>
					</ul>
				
				<div>
					<form onSubmit={this.handleSubmit}>
						<Select 
							className={"colorOptions"} 
							label={"COLOR"} 
							option={["White","Black","Blue"]}
							placeholder={"Select Color"}
							name={"color"}
							value={this.state.color}
							changeFunc={this.handleChange}/>
						<Select 
							className={"sizeOptions"} 
							label="SIZE" 
							option={["Small","Medium","Large","X-large"]}
							placeholder={"Select Size"}
							name={"size"}
							value={this.state.size}
							changeFunc={this.handleChange}/>
						<Input 
							className={"numberInput"}
							label={"QTY"}
							type={"number"}
							placeholder={0}
							name={"qty"}
							changeFunc={this.handleChange}
							min={0}
						/>

						<Button 
							className={"clearInput"}
							type={"reset"}
							value={"CLEAR SELECTION"}
							/>

						<Button
							className={"addToCart"}
							type={"Submit"}
							value={"ADD TO CART"}
						/>

						<Button
							className={"addToWishlist"}
							type={"button"}
							value={
								<div>
									<span style={{marginRight:"5px",fontSize:"1.4em"}} className="glyphicon glyphicon-heart-empty"></span>
									ADD TO WISHLIST
								</div>
							}/>
					</form>
				</div>
				<div className="socialMedia">
					<div className="socialMediaTitle">
						<h4>SHARE THIS</h4>
					</div>
					<div className="socialMediaIcon">
						<div className="fbBtn">
							<Button
								className={"fblikeBtn"} 
								value={
									<div>
										<i className='fab fa-facebook'></i>
										Like
									</div>
								}
							/>
							<Button
								className={"fbshareBtn"} 
								value={
									<div>
										Share
									</div>
								}
							/>
							<span className="showLike">
								235k
							</span>
						</div>
						<div>
							<Button
								className={"twBtn"} 
								value={
									<div>
										<i className='fab fa-twitter'></i>
										Tweet
									</div>
								}
							/>
								<span className="showLike">
									93
								</span>
						</div>
						<div>
							<Button
								className={"pinitBtn"} 
								value={
									<div>
										<i className='fab fa-pinterest-p'></i>
										init
									</div>
								}
							/>	<span className="showLike pinlike">
									65k+
								</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ImgInfo;