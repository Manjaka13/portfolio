import React from "react";
import VRC from "../vrc";
import "./Title.scss";

class Title extends VRC {
	constructor(props) {
		super(props, "vrc-title");
		if(props.className)
			this.append(props.className);
	}
	render() {
		if(this.children) {
			const type = this.props.h1 ? "h1" : this.props.h2 ? "h2" : this.props.h3 ? "h3" : this.props.h4 ? "h4" : "h5";
			switch(type) {
				case "h1":
					return (<h1 id={this.id} className={this.cn}>{this.children}</h1>);
				case "h2":
					return (<h2 id={this.id} className={this.cn}>{this.children}</h2>);
				case "h3":
					return (<h3 id={this.id} className={this.cn}>{this.children}</h3>);
				case "h4":
					return (<h4 id={this.id} className={this.cn}>{this.children}</h4>);
				case "h5":
					return (<h5 id={this.id} className={this.cn}>{this.children}</h5>);
				default:
					break;
			}
		}
		return null;
	}
}

export default Title;