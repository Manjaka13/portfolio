import React from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Textblock from "../Textblock/Textblock";
import {Title, Text} from "../vrc/";
import "./AboutMe.scss";
import avatar from "../assets/avatar_harijaona_rajaonson.jpg";
import resume from "../assets/resume_harijaona_rajaonson_developer.docx";

function AboutMe() {
	const age = new Date().getFullYear() - 1996;
	return (
		<Textblock id="about" className="pf-aboutme">
			<Title className="title1" h2 sm>Who I am ?</Title>
			<Title className="title2" h3 xlg>I build high quality apps !</Title>
			<div className="separator"></div>
			<Text>I'm a full stack developer based in Madagascar, specialized in Javascript. I am familiar with the <span className="bold">MERN</span> stack technologies. I have 2 years of Freelance experience and more than 6 years in general programming. I enjoy building pixel perfect apps for the web. I like them to be fast, beautiful, secured and with scalable code. Don't hesitate to talk with me, I speak English and French fluently apart of my native language.</Text>
			<button className="vrc-button vrc-text resume" title="Get my resume !" onClick={() => {document.location = resume;}}>
				<Icon icon={faDownload} /> Download my resume
			</button>
			<div className="info-card">
				<div className="left">
					<div className="box">
						<div className="image">
							<img src={avatar} alt="Avatar Harijaona RAJAONSON" />
						</div>
					</div>
				</div>
				<div className="right">
					<div className="box">
						<ul className="label">
							<li className="vrc-text bold">Name:</li>
							<li className="vrc-text bold">Birth day:</li>
							<li className="vrc-text bold">Phone:</li>
							<li className="vrc-text bold">E-mail:</li>
						</ul>
						<ul className="content">
							<li className="vrc-text">Harijaona RAJAONSON (Manjaka)</li>
							<li className="vrc-text">09 /06 / 96 (<span className="bold">{age} years</span> old)</li>
							<li className="vrc-text">+261 34 67 154 30</li>
							<li className="vrc-text">manjaka.rajaonson@gmail.com</li>
						</ul>
					</div>
				</div>
			</div>
		</Textblock>
	);
}

export default AboutMe;