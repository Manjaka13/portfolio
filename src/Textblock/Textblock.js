import React from "react";
import "./Textblock.scss";

function Tetxblock(props) {
	const children = props.children;
	if(children) {
		const id = props.id ? props.id : "";
		const cn = "pf-textblock" + (props.className ? " " + props.className : "");
		return (
			<div id={id} className={cn}>
				<div className="padded-block">
					{children}
				</div>
			</div>
		);
	}
	return null;
}

export default Tetxblock;