import React from "react";
import Textblock from "../Textblock/Textblock";
import {Title, Text} from "../vrc/";
import "./Skills.scss";
import data from "./Skilldata";

function Skills() {
	const mapped_skills = data.primary.map((item, n) => {
		return (
			<div className="skill" key={n}>
				<div className="head" style={{background: item.color}}>
					<img className="logo" src={item.logo} alt={item.name} />
				</div>
				<div className="body">
					<h4 className="vrc-title vrc-title-xsm title">{item.name}</h4>
					<Text className="text">{item.about}</Text>
				</div>
			</div>
		);
	});
	return (
		<Textblock id="skills" className="pf-skills">
			<Title className="title1" h2 sm>My skills</Title>
			<Title className="title2" h3 xlg>I use awesome techs !</Title>
			<div className="separator"></div>
			<Text>
				Nowadays, a bunch of new technologies are released every year and programming languages evolve rapidly with new features. So, learning and mastering quickly new frameworks or libraries is a key for a successfull developer. These tools are meant to ease the development process, to build better apps with less code and more structurated patterns.
			</Text>
			<div className="skill-list">
				{mapped_skills}
			</div>
		</Textblock>
	);
}

export default Skills;