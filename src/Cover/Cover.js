import React, {Component} from "react";
import "./Cover.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faHackerrank} from "@fortawesome/free-brands-svg-icons";
import Animejs from "animejs";

class Cover extends Component {
	constructor(props) {
		super();
		this.state = {
			current_slide: 0
		};
		this.slides = [
			"Fullstack developer",
			"Quick learner",
			"MERN stack lover",
			"Passionate programmer"
		];
		this.social = [
			{
				title: "Follow me on Facebook !",
				icon: faFacebook,
				link: "https://facebook.com/manjaka13"
			},
			{
				title: "Visit my Github repositories.",
				icon: faGithub,
				link: "https://github.com/Manjaka13/rps-game"
			},
			{
				title: "Check my HackerRank profile !",
				icon: faHackerrank,
				link: "#0"
			},
			{
				title: "Learn more about me on LinkedIn.",
				icon: faLinkedin,
				link: "https://linkedin.com/mwlite/in/harijaona-rajaonson-9456481b5"
			}
		];
		this.update_slide = this.update_slide.bind(this);
	}

	//Advances slide to next frame
	update_slide() {
		this.setState(prev_state => {
			const next = prev_state.current_slide + 1;
			return {
				current_slide: next >= this.slides.length ? 0 : next
			};
		});
	}

	componentDidMount() {
		setInterval(() => {
			this.update_slide();
		}, 2000);
		Animejs({
            targets: ".pf-cover .social li",
            top: "0",
            opacity: "1",
            delay: Animejs.stagger(200, {start: 1000}),
            duration: 1400
        });
        Animejs({
            targets: ".pf-cover .social .separator",
            width: "60%",
            delay: 1000,
            duration: 2000,
            easing: "spring"
        });
	}

	render() {
		const mapped_slides = this.slides.map((slide, n) => {
			const slide_style = {
				top: (this.state.current_slide === n ? (-100 * n) : (-100 * (n + 1))) + "%",
				opacity: this.state.current_slide === n ? "1" : "0"
			};
			return (
				<div className="slide-item" style={slide_style} key={n}>
					<p className="content">{slide}</p>
				</div>
			);
		});
		const mapped_social = this.social.map((item, n) => {
			return (
				<li key={n}>
					<a className="link" href={item.link} title={item.title}>
						<Icon className="icon" icon={item.icon} />
					</a>
				</li>
			);
		});

		return (
			<div className="pf-cover">
				<div className="box">
					<div className="container">
						<h2 className="title">Call me Manjaka,</h2>
						<p className="little-title">I am a </p>
						<div className="slide">
							{mapped_slides}
						</div>
					</div>
				</div>
				<div className="social">
					<div className="separator"></div>
					<ul className="list">
						{mapped_social}
					</ul>
				</div>
			</div>
		)
	}
}

export default Cover;