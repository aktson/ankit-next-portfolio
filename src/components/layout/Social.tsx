/***** IMPORTS *****/
import React, { FC } from "react";
import { Facebook } from "./socialIcons/Facebook";
import { Github } from "./socialIcons/Github";
import { Instagram } from "./socialIcons/Instagram";
import { LinkedIn } from "./socialIcons/LinkedIn";

/***** COMPONENT-FUNCTION *****/
export const Social: FC = (): JSX.Element => {
	/*** Return statement ***/
	return (
		<div className="hidden sm:block sm:fixed sm:bottom-20 sm:left-2 mb-5 ">
			<ul className=" w-16 flex flex-col justify-center items-center gap-3 cursor-pointer">
				<li>
					<LinkedIn />
				</li>
				<li>
					<Github />
				</li>
				<li>
					<Facebook />
				</li>
				<li>
					<Instagram />
				</li>
			</ul>
			<div className="h-16 w-0.5 bg-primary my-1 mx-auto"></div>
		</div>
	);
};
