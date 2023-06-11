/***** IMPORTS *****/
import React from "react";
import { FaGithub } from "react-icons/fa";

/***** COMPONENT-FUNCTION *****/
export const Github = () => {
	/*** Return Statement ***/
	return (
		<a href="https://github.com/aktson" target="_blank" rel="noreferrer">
			<FaGithub className="social-icons " />
		</a>
	);
};
