import React, {Component} from "react";
import "./Navigation.scss";
import logo from "../assets/logo_harijaona_rajaonson.png";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Animejs from "animejs";
import data from "./Navigationdata";
library.add(fas);

class Navigation extends Component {
	constructor(props) {
		super();
		this.state = {
			letter_highlighted: -1,
			square_white: false,
			square_highlight: false,
			square_red: false,
			hover: []
		};
		const name = "H. RAJAONSON";
		this.name = name.split("");
		this.sections = data;
		this.highlight_delay = 1200;
		this.highlight_speed = 50;
		this.highlight_next = this.highlight_next.bind(this);
		this.square = this.square.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.menu_toggle = this.menu_toggle.bind(this);
	}

	componentDidMount() {
		const square_delay = this.highlight_delay + this.highlight_speed * this.name.length + 200;
		setTimeout(() => {
			this.highlight_next();
		}, this.highlight_delay);
		setTimeout(() => {
			this.square("white");
		}, square_delay);
		setTimeout(() => {
			this.square("highlight");
		}, square_delay);
		setTimeout(() => {
			this.square("red");
		}, square_delay + 700);
		Animejs({
            targets: ".pf-navigation .left .logo",
            left: "0",
            delay: 1000,
            duration: 2000
        });
	}

	highlight_next() {
		if(this.state.letter_highlighted < this.name.length - 1) {
			this.setState(prev_state => {
				return {
					letter_highlighted: prev_state.letter_highlighted + 1
				};
			});
			setTimeout(() => {
				this.highlight_next();
			}, this.highlight_speed);
		}
	}

	square(value) {
		if(value === "white")
			this.setState({
				square_white: true
			});
		else if(value === "highlight")
			this.setState({
				square_highlight: true
			});
		else if(value === "red")
			this.setState({
				square_red: true
			});
	}

	onMouseOver(key) {
        this.setState({
            hover: {
                [key]: true
            }
        });
    }

    onMouseOut(key) {
        this.setState({
            hover: {
                [key]: false
            }
        });
    }

    menu_toggle() {
    	if(typeof(this.props.change) === "function")
    		this.props.change();
    }

	render() {
		const square_className = this.state.square_red ? "square square-red" : this.state.square_highlight ? "square square-white square-highlight" : this.state.square_white ? "square square-white" :  "square";
		const mapped_name = this.name.map((letter, n) => {
			const letter_className = this.state.letter_highlighted >= n ? "highlight" : "";
			return (
				<span className={letter_className} key={n}>{letter}</span>
			);
		});

		let mapped_sections = [];
        for(let item in this.sections) {
        	const underline_className = this.state.hover[item] ? "underline underline-active" : "underline";
            mapped_sections.push(
                <li key={item}>
                    <a
                        className="vrc-text link"
                        href={"#" + item}
                        title={this.sections[item].title}
                        onMouseOver={(event) => this.onMouseOver(item)}
                        onMouseOut={(event) => this.onMouseOut(item)}
                    >
                        <Icon icon={this.sections[item].icon} /> {this.sections[item].content}
                    </a>
                    <div className={underline_className}></div>
                </li>
            );
        }

		return (
			<div className="pf-navigation">
				<div className="left">
					<img className="logo" src={logo} alt="Logo Harijaona RAJAONSON" />
					<h1 className="name">{mapped_name}</h1>
					<div className={square_className}></div>
				</div>
				<div className="right">
					<ul className="sections">
                        {mapped_sections}
                    </ul>
                    <div className="trigger" title="Open menu." onClick={this.menu_toggle}>
                    	<Icon className="icon" icon="bars" />
                    </div>
				</div>
			</div>
		)
	}
}

export default Navigation;