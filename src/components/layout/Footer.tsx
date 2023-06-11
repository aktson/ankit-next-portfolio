/***** IMPORTS *****/
import React, { FC } from "react";
import { Facebook } from "./socialIcons/Facebook";
import { Github } from "./socialIcons/Github";
import { Instagram } from "./socialIcons/Instagram";
import { ToTopButton } from "./ToTopButton";

/***** COMPONENT-FUNCTION *****/
export const Footer: FC = (): JSX.Element => {
	const year = new Date().getFullYear();

	/*** Return statement ***/
	return (
		<footer className="footer" id="footer">
			<div className="flex  justify-center gap-4 text-center sm:hidden">
				<Facebook />
				<Github />
				<Instagram />
			</div>
			<div>
				<p className="text-md text-white">Copyright &copy; 2022 - {year} SONI | Org nr. 930 862 665</p>
			</div>
			<ToTopButton />
		</footer>
	);
};
