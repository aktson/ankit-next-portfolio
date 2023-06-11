/***** IMPORTS *****/
import React, { FC } from "react";
import { FaLinkedin } from "react-icons/fa";

/***** COMPONENT-FUNCTION *****/
export const LinkedIn: FC = (): JSX.Element => {
	/*** Return statement ***/
	return (
		<a href="https://www.linkedin.com/in/ankit-soni-78177b1a/" target="_blank" rel="noreferrer">
			<FaLinkedin className="social-icons" />
		</a>
	);
};
