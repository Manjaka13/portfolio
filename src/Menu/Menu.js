import React, {useState} from "react";
import "./Menu.scss";
import {Title, Text} from "../vrc/";
import data from "../Navigation/Navigationdata";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Menu(props) {
	const cn = props.opened ? "pf-menu pf-menu-opened" : "pf-menu";
	let mapped_sections = [];
	for(let item in data) {
        mapped_sections.push(
        	<li key={item}>
        		<a
        			className="vrc-text link"
        			href={"#" + item}
        			title={data[item].title}
        		>
        			<Icon icon={data[item].icon} /> {data[item].content}
        		</a>
        	</li>
        );
    }
    const click_evt = () => {
    	if(typeof(props.change) === "function")
    		props.change();
    };
	return (
		<div className={cn} onClick={click_evt}>
			<Title className="title" h4 md>Navigation</Title>
			<div className="separator"></div>
			<ul className="sections">
				{mapped_sections}
			</ul>
			<Text className="text">For better user experience, view the website with a device that has a large screen. If you find anything wrong, grammatical errors or you want to give me any advice for improving my portfolio or my projects, please contact me ASAP !</Text>
		</div>
	);
}

export default Menu;