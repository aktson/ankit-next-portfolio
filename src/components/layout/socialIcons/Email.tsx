/***** IMPORTS *****/
import React from "react";
import { FaEnvelope } from "react-icons/fa";

/***** COMPONENT-FUNCTION *****/
export const Email = () => {
	/*** Return Statement ***/
	return (
		<a href="mailto:ankitnsoni@outlook.com" rel="noreferrer">
			<FaEnvelope className="social-icons" />
		</a>
	);
};
