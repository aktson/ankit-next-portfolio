/***** IMPORTS *****/
import { FC } from "react";
import { FaInstagram } from "react-icons/fa";

/***** COMPONENT-FUNCTION *****/
export const Instagram: FC = (): JSX.Element => {
	/*** Return Statement ***/
	return (
		<a href="https://www.instagram.com/ankt8soni" target="_blank" rel="noreferrer">
			<FaInstagram className="social-icons" />
		</a>
	);
};
