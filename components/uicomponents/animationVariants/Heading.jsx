import React from "react";
import { motion } from "framer-motion";

function Heading({ heading }) {
	const lineVariant2 = {
		offscreen: {
			translateY: 60,
			opacity: 0,
		},
		onscreen: {
			translateY: 0,
			opacity: 1,
			transition: {
				type: "spring",
				delay: 0.2,
				bounce: 0.4,
				duration: 0.9,
				stiffness: 100,
			},
		},
	};
	const lineVariant = {
		offscreen: {
			translateY: -600,
			opacity: 0,
		},
		onscreen: {
			translateY: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.9,
				stiffness: 100,
			},
		},
	};

	return (
		<div className="relative">
			<motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8, once: false }} variants={lineVariant2}>
				{heading}
			</motion.h2>
			<motion.span
				className="absolute w-2/3 h-3 mt-3 mx-auto bg-primary top-8 inset-0 "
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ amount: 0.8, once: false }}
				variants={lineVariant}></motion.span>
		</div>
	);
}

export default Heading;
