import React from "react";
import VRC from "../vrc";
import "./Text.scss";

class Text extends VRC {
	constructor(props) {
		super(props, "vrc-text");
		if(props.class)
			this.append(props.className);
	}
	render() {
		if(this.children)
			return (<p id={this.id} className={this.cn}>{this.children}</p>);
		return null;
	}
}

export default Text;