import React from "react";
import { Link } from "react-scroll";
import { FaDotCircle } from "react-icons/fa";

export function ScrollIndicator() {
	return (
		<div className="fixed right-2 sm:right-6 bottom-40 " id="indicatior-container">
			<ul className=" flex flex-col gap-6 ">
				<li>
					<Link activeClass="active-indicator" to="hero" spy={true} smooth={true} duration={500}>
						<FaDotCircle className="indicator-icons " />
					</Link>
				</li>
				<li>
					<Link activeClass="active-indicator" to="about" spy={true} smooth={true} duration={500}>
						<FaDotCircle className="indicator-icons" />
					</Link>
				</li>
				<li>
					<Link activeClass="active-indicator" to="skills" spy={true} smooth={true} duration={500}>
						<FaDotCircle className="indicator-icons" />
					</Link>
				</li>
				<li>
					<Link activeClass="active-indicator" to="projects" spy={true} smooth={true} duration={500}>
						<FaDotCircle className="indicator-icons" />
					</Link>
				</li>
				<li>
					<Link activeClass="active-indicator" to="contact" spy={true} smooth={true} duration={500}>
						<FaDotCircle className="indicator-icons" />
					</Link>
				</li>
			</ul>
		</div>
	);
}
