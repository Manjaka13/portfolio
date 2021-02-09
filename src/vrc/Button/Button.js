import React from "react";
import VRC from "../vrc";
import "./Button.scss";

class Button extends VRC {
	constructor(props) {
		super(props, "vrc-button", "vrc-text");
	}
	render() {
		if(this.children) {
			return (
				<button id={this.id} className={this.cn} onClick={() => this.changed("click")}>
					{this.children}
				</button>
			);
		}
		return null;
	}
}

export default Button;