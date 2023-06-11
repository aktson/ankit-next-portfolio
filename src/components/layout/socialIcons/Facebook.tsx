/***** IMPORTS *****/
import { FC } from "react";
import { FaFacebookF } from "react-icons/fa";

/***** COMPONENT-FUNCTION *****/
export const Facebook: FC = (): JSX.Element => {
	/*** Return Statement ***/
	return (
		<a href="https://www.facebook.com/ankitsoni86" target="_blank" rel="noreferrer">
			<FaFacebookF className="social-icons" />
		</a>
	);
};
