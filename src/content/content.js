import React, {Component} from "react";
import ImgInfo from "./product_info";
import ImgDisplay from "./product_display";
import "./content.css";

class content extends Component{

	constructor(){
		super();
		this.state={
			img:""
		}
	}

	getImg=(image)=>{
		this.setState({img:image});
	}


	render(){
		return(
			<div className="content_wrapper">
				<div className="content_container">
					<ImgDisplay 
						getImg={this.getImg}/>
					<ImgInfo 
						getCartItem={this.props.getCartItem}
						getCartInfo={this.props.getCartInfo}
						currentProductImg={this.state.img}
						flag={this.props.flag}/>
					
				</div>
			</div>

		);
	}

}


export default content;

