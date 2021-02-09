import React from "react";
import VRC from "../vrc";
import "./Input.scss";

class Input extends VRC {
	constructor(props) {
		super(props, "vrc-input", "vrc-text");
		this.types = ["text", "password", "mail"];
		this.state = {
			verified: true
		};
		this.set_verfified = this.set_verfified.bind(this);
	}

	set_verfified(status) {
		if(this.state.verified !== status) {
			this.setState({
				verified: status
			});
		}
	}

	render() {
		const type = this.types.includes(this.props.type) ? this.props.type : this.types[0];
		const changed = value => {
			if(!this.disabled) {
				let verified = true;
				verified = this.changed(value);
				verified = (verified === null || verified === undefined) ? true : verified;
				this.set_verfified(verified);
			}
		};
		this.remove("vrc-input-wrong");
		if(!this.state.verified)
			this.append("vrc-input-wrong");
		this.remove("vrc-input-disabled");
		if(this.disabled)
			this.append("vrc-input-disabled");
		return (
			<input
				id={this.id}
				className={this.cn}
				type={type}
				placeholder={this.children}
				onChange={(e) => changed(e.target.value)}
			/>
		);
	}
}

export default Input;