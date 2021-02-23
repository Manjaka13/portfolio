import React, {useState, useEffect} from "react";
import Textblock from "../Textblock/Textblock";
import {Title, Text} from "../vrc";
import "./Works.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import works from "./Worksdata";
import loading from "../assets/loading.gif";

function Works() {
	const delay = 2000;
	const [shown, show] = useState(false);
	let mapped_works;
	//Component did mount
	useEffect(() => {
		setTimeout(() => show(true), delay);
		return show(false);
	}, []);

	if(shown) {
	mapped_works = works.map((work, n) => {
		const mapped_techs = work.techs.map((tech, k) => {
			return (<li key={k}>{tech}</li>);
		});
		const cn = n % 2 === 0 ? "row" : "row row-alternate";
		return (
			<div className={cn} key={n}>
				<div className="left little">
					<div className="head">
						<img className="logo" src={work.logo} alt={work.name} />
						<h4 className="vrc-title vrc-title-xsm title" style={{color: work.color}}>
							{work.name}
						</h4>
					</div>
					<Text className="text">{work.about}</Text>
					<div className="links">
						<a className="vrc-link link" href={work.link} title="View project live">
							<Icon icon={faLink}/> Demo
						</a>
						<a className="vrc-link link" href={work.repo} title="Go to project's repository">
							<Icon icon={faGithub}/> Repository
						</a>
					</div>
				</div>
				<div className="right big">
					<div className="box" style={{
						background: "url(" + work.image + ") center center no-repeat",
						backgroundSize: "cover"
					}}>
						<ul className="list">
							{mapped_techs}
						</ul>
					</div>
				</div>
			</div>
		);
	});
	}
	else {
		mapped_works = (
			<div className="empty">
				<div className="box">
					<img className="loading" src={loading} alt="..." />
					<Text className="text">Loading projects...</Text>
				</div>
			</div>
		);
	}
	return (
		<Textblock id="works" className="pf-works">
			<Title className="title1" h2 sm>Work samples</Title>
			<Title className="title2" h3 xlg>I've made a lot of apps !</Title>
			<div className="separator"></div>
			<Text>
				As a developer, I already achieved many personal and professional projects to make use of the skills I listed previously. These skills helped me a lot to realize such refined applications. Some of them could appear simple, but the logic behind the stack it uses is the major part of it is hidden from the public eye. If you want to know more about, I invite you to take a look at my Github repositories.
			</Text>
			<div className="works-list">
				{mapped_works}
			</div>

		</Textblock>
	)
}

export default Works;