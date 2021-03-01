import React, {useState, useRef} from "react";
import Textblock from "../Textblock/Textblock";
import {Title, Button} from "../vrc/";
import "./Contacts.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import loading_gif from "../assets/loading.gif";

function Contacts() {
	const [loading, set_loading] = useState(false);
	const [caption, set_caption] = useState({text: "", status: "none"});
	const ref_name = useRef(null);
	const ref_email = useRef(null);
	const ref_message = useRef(null);
	const reset_form = () => {
		ref_name.current.value = null;
		ref_email.current.value = null;
		ref_message.current.value = null;
	};
	const submit_form = (e) => {
		e.preventDefault();
		const name = ref_name.current.value;
		const email = ref_email.current.value;
		const message = ref_message.current.value;
		if(name.length > 2 && email.length > 5 && message.length > 3) {
			set_caption({text: "Sending...", status: "none"});
			set_loading(true);
			fetch("https://mailer-manjaka13.herokuapp.com", {
				method: "POST",
				headers: {
		       		"Content-Type": "application/json"
		        },
		        body: JSON.stringify({
		        	destination: "manjaka.rajaonson@gmail.com",
		        	subject: "Portfolio message from " + name + "<" + email + ">",
		        	message: message
		        })
		    }).then(response =>response.json())
		    .then(response => {
		    	console.log(response);
		    	if(response.status === 1) {
		        	console.log("Email sent !");
		        	set_caption({text: "Your email has been sent successfully !", status: "success"});
		    	}
		        else {
		        	console.log("Not sent !");
		        	set_caption({text: "Your email has not been sent !", status: "error"});
		        }
		        reset_form();
		        set_loading(false);
		    }).catch(e => {
		    	reset_form();
		        console.log(e);
		        set_loading(false);
		        set_caption({text: "Your email has not been sent !", status: "error"});
		    });
		}
		else {
			console.log("Empty !");
			set_caption({text: "Fill the form correctly", status: "error"});
		}
	};
	let button = (<Button className="submit" type="submit"><Icon icon={faPaperPlane} /> Send</Button>);
	if(loading) {
		button = (
			<Button disabled className="submit" type="submit">
				Please wait... <img className="loading" src={loading_gif} alt="..."/>
			</Button>
		);
	}
	const caption_cn = caption.text ? "vrc-text caption caption-" + caption.status : "vrc-text caption";
	return (
		<div id="contacts" className="pf-contacts">
			<Textblock className="block">
				<Title className="ttl" h3 xlg>Convinced ? Let's talk !</Title>
				<div className="separator"></div>
				<form className="form" onSubmit={submit_form}>
					<input className="vrc-text name" type="text" placeholder="Your name" ref={ref_name} />
					<input className="vrc-text mail" type="mail" placeholder="Your e-mail" ref={ref_email} />
					<textarea className="vrc-text message" placeholder="Leave a message" ref={ref_message}></textarea>
					{button}
				</form>
				<p className={caption_cn}>{caption.text}</p>
			</Textblock>
		</div>
	);
}

export default Contacts;