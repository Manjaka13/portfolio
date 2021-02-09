import React, {useState} from "react";
import "./App.scss";
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import AboutMe from "../AboutMe/AboutMe";
import WhatIDo from "../WhatIDo/WhatIDo";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function App() {
	const [menu_opened, set_menu_opened] = useState(false);
	const menu_toggle = () => {
		set_menu_opened(!menu_opened);
	};
	return (
		<div className="pf-app">
			<Menu opened={menu_opened} change={menu_toggle} />
			<Navigation change={menu_toggle} />
			<Cover />
			<AboutMe />
			<WhatIDo />
			<Skills />
			<Works />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;
