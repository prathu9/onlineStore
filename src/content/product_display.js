import React,{Component} from "react";
import Img from "../imageElement/image.js";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
class ImgDisplay extends Component{

constructor(){
	super();
	this.state={
			currentProduct:"img1",
			img:img1
		}
	}
changeImg=(image,e)=>{
		this.setState({
			img:image
		})
	}

componentDidMount(){
	this.props.getImg(this.state.currentProduct);
}

		
	


render(){
			return(
				<div className="imgDisplay_container">
					<div className="imgTitle">
						<p> &lt; Back to <a href="#women">Women</a></p>
						<h2>The Atelier Tailored Coat</h2>
						<div style={{margin:"20px 0"}}>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#F4C239"}}></i>
						<i className='fas fa-star' style={{fontSize:"16px",color:"#ddd",marginRight:"5px"}}></i>
						3Reviews(s) | <a href="#review">ADD A REVIEW</a>	
					</div>
					</div>
					<div className="main_img">
						<Img source={this.state.img}/>
					</div>
					<div className="other_imgs">
						<div onClick={(e) => this.changeImg(img1, e)}
						 style={this.state.style}>

							<Img 
							source={img1}/>
						</div>

						<div onClick={(e) => this.changeImg(img2, e)}>
							<Img  
							source={img2}/>
						</div>

						<div onClick={(e) => this.changeImg(img3, e)}>
							<Img 
							source={img3}/>
						</div>

						<div onClick={(e) => this.changeIm(img4, e)}>
							<Img 
							source={img4}/>
						</div>
					</div>
				</div>
			);
	}
}

export default ImgDisplay;