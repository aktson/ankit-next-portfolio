import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Email() {
	return (
		<a href="mailto:ankitnsoni@outlook.com" rel="noreferrer">
			<FaEnvelope className="social-icons" />
		</a>
	);
}

export default Email;
