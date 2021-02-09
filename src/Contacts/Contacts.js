import React from "react";
import Textblock from "../Textblock/Textblock";
import {Title, Button} from "../vrc/";
import "./Contacts.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function Contacts() {
	return (
		<div id="contacts" className="pf-contacts">
			<Textblock className="block">
				<Title className="ttl" h3 xlg>Convinced ? Let's talk !</Title>
				<div className="separator"></div>
				<form className="form">
					<input className="vrc-text name" type="text" placeholder="Your name" />
					<input className="vrc-text mail" type="mail" placeholder="Your e-mail" />
					<textarea className="vrc-text message" placeholder="Leave a message"></textarea>
					<Button className="submit"><Icon icon={faPaperPlane} /> Send</Button>
				</form>
			</Textblock>
		</div>
	);
}

export default Contacts;