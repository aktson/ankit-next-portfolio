import React from "react";
import Email from "./socialIcons/Email";
import Facebook from "./socialIcons/Facebook";
import Github from "./socialIcons/Github";
import Instagram from "./socialIcons/Instagram";

function Social() {
	return (
		<div className="hidden sm:block sm:fixed sm:bottom-20 sm:left-2 mb-5 ">
			<ul className=" w-16 flex flex-col justify-center items-center gap-3 cursor-pointer">
				<li>
					<Github />
				</li>
				<li>
					<Facebook />
				</li>
				<li>
					<Instagram />
				</li>
				<li>
					<Email />
				</li>
			</ul>
			<div className="h-16 w-0.5 bg-accent my-1 mx-auto"></div>
		</div>
	);
}

export default Social;
