import {Component} from "react";

class VRC extends Component {
	constructor(props, cn, ext) {
		super();
		//Basic props
		this.id = props.id ? props.id : "";
		this.cn = ext ? (ext + " " + cn) : cn;
		this.disabled = (props.disabled || props.disable) ? true : false;
		//Set component sizes
		this.size = props.xlg ? "xlg" : props.lg ? "lg" : props.md ? "md" : props.sm ? "sm" : props.xsm ? "xsm" : "xlg";
		this.append(cn + "-" + this.size);
		this.append(props.className);
		//Event callback
		this.changed = typeof(props.changed) === "function" ? props.changed : this.default_changed;
		this.children = (props.children ? props.children : null);
	}

	default_changed() {
	}

	//Appends new class name in classname list
	append(new_class) {
		if(typeof(new_class) === "string" && new_class.length > 0)
			this.cn += this.cn.length === 0 ? new_class : " " + new_class;
	}

	//Removes class name in classname list
	remove(search) {
		if(this.cn.length > 0) {
			let new_classname = "";
			this.cn.split(" ").forEach(c => new_classname += c !== search ? (new_classname.length === 0 ? c : " " + c) : "");
			this.cn = new_classname;
		}
	}

	//Checks a classname existence
	exist(class_name) {
		let ret = false;
		if(this.cn.length > 0)
			this.cn.split(" ").forEach(c => c === class_name ? (ret = true) : null);
		return ret;
	}

	//Alias
	exists(class_name) {
		return this.exist(class_name);
	}
}

export default VRC;