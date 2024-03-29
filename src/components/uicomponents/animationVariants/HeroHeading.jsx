import React from "react";
import { motion } from "framer-motion";
import { wavyTextChild } from "./wavyText";

function HeroHeading({ heading, font }) {
	return (
		<div style={{ display: "flex", overflow: "hidden", flexWrap: "wrap" }}>
			{heading.split("").map((letter, index) => {
				return (
					<motion.span key={index} variants={wavyTextChild} className={` ${font} `}>
						{letter === " " ? "\u00A0" : letter}
					</motion.span>
				);
			})}
		</div>
	);
}

export default HeroHeading;
