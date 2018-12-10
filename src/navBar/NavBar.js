import React, {Component} from "react";
import Li from "./listItem";
import Search from "./search";
import LikeBtn from "./likeBtn";
import Button from "../button/button"
import "./NavBar.css";

class NavBar extends Component{

	constructor(){
		super();
		this.state={
			like:false,
			likeClass:"glyphicon glyphicon-heart-empty",
			sideDisplay:"none"
		}
	
	}

	liked=()=>{
			
			this.setState({
			like:!this.state.like,
			likeClass:this.state.like?
			"glyphicon glyphicon-heart":
			"glyphicon glyphicon-heart-empty"});


		};

	showSideBar=()=>{
		if(this.state.sideDisplay==="none"){
			this.setState({sideDisplay:"block"});
		}
		else{
			this.setState({sideDisplay:"none"});
		}
	}

	render(){

		const menuBtnStyle={
			width:"50px",
			height:"40px",
			backgroundColor:"#fff",
			border:"none",
			fontSize:"1.7em"
		}


		return(

			<div className="nav_wrapper">
				

				
				<div className="nav_container">

				<div className="overlay" style={{display:`${this.state.sideDisplay}`}}>
					<div className="sideNavBar" >
					<Button 
						className={"navCloseBtn"}
						value={"X close"}
						clickFunc={this.showSideBar}
						/>
						<ul className="nav_list">
						<Li url={`#Home`} value="HOME"/>
						<Li 
							url={`#Men`} 
							value={
								<span>
									<span style={{marginLeft:"70px"}}>Men</span>
									<span style={{marginLeft:"70px"}} className="glyphicon glyphicon-triangle-right"></span>
								</span>
							}
							/>

						<Li 
							url={`#Women`}
							value={
								<span>
									<span style={{marginLeft:"70px"}}>Women</span>
									<span style={{marginLeft:"50px"}} className="glyphicon glyphicon-triangle-right"></span>
								</span>
							}
							/>
						<Li url={`#LookBook`}value="LOOKBOOK"/>
						<Li url={`#About`}value="ABOUT"/>
						<Li url={`#Blog`}value="BLOG"/>
					</ul>
				</div>
				</div>
					<Button 
						styles={menuBtnStyle} 
						className={`unclickable glyphicon glyphicon-menu-hamburger`}
						/>
					<Button 
						styles={menuBtnStyle} 
						className={`clickable glyphicon glyphicon-menu-hamburger`}
						clickFunc={this.showSideBar}/>
					<ul className="nav_list">
						<Li url={`#Home`} value="HOME"/>
						<Li 
							url={`#Men`} 
							value={
								<span>
									<span style={{marginRight:"15px"}}>Men</span>
									<span className="glyphicon glyphicon-triangle-bottom"></span>
								</span>
							}
							/>
						
						<Li 
							url={`#Women`}
							value={
								<span>
									<span style={{marginRight:"15px"}}>WOMEN</span>
									<span className="glyphicon glyphicon-triangle-bottom"></span>
								</span>
							}
							/>
						
						<Li url={`#LookBook`}value="LOOKBOOK"/>
						<Li url={`#About`}value="ABOUT"/>
						<Li url={`#Blog`}value="BLOG"/>
					</ul>
					<div style={{minWidth:"100px"}}>
						<LikeBtn className={this.state.likeClass} clickFunc={this.liked}/>
						<Search />
					</div>
				</div>
			</div>

		);
	}
}

export default NavBar;