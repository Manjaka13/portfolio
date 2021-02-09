import React from "react";
import VRC from "../vrc";
import "./Form.scss";

class Form extends VRC {
	constructor(props) {
		super(props, "vrc-form");
	}
	render() {
		if(this.children) {
			const change = (e) => {
				e.preventDefault();
				this.changed("submit");
			};
			return (
				<form id={this.id} className={this.cn} onSubmit={change}>
					{this.children}
				</form>
			);
		}
		return null;
	}
}

export default Form;