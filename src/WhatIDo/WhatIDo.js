import React from "react";
import "./WhatIDo.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faDatabase, faLaptop, faCodeBranch, faListAlt} from "@fortawesome/free-solid-svg-icons";
import {Title, Text} from "../vrc";

function WhatIDo() {
	return (
		<div className="pf-whatido">
			<div className="container">
				<Title className="title" h2 xlg>What I've learned ?</Title>
				<div className="left">
					<div className="box">
						<Title className="label" h3 xsm><Icon icon={faLaptop} /> Development principles</Title>
						<Text className="text">I am applying all the programming rules to make scalable, structured and efficient apps. S.O.L.I.D principles, D.R.Y, K.I.S.S, these make the development faster, easier and more maintainable code.</Text>
					</div>
					<div className="box">
						<Title className="label" h3 xsm><Icon icon={faCodeBranch} /> Source control</Title>
						<Text className="text">Versioning and managing new program implementations in a team of developers is a tough job. It is solved by using Git version control, along with it I push my code on Github to collaborate with teams.</Text>
					</div>
				</div>
				<div className="right">
					<div className="box">
						<Title className="label" h3 xsm><Icon icon={faDatabase} /> Data structures</Title>
						<Text className="text">A well talented programmer should master some of the algorithms and models for solving popular data structure problems. These skills separates an simple developer from one that outputs efficient code.</Text>
					</div>
					<div className="box">
						<Title className="label" h3 xsm><Icon icon={faListAlt} /> Design patterns</Title>
						<Text className="text">In O.O.P, there are existing patterns and code architectures that eases the development process and makes better scalable and structured code. Factory, Singleton, MVC... are the most popular ones.</Text>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatIDo;