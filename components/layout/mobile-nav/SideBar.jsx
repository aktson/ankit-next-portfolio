import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { Navigation } from "./Navigation";
import { Hamburger } from "./Hamburger";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(20px at 40px 40px)",
		transition: {
			delay: 0.1,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export const SideBar = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className="nav lg:hidden ">
			<motion.div className="nav-mobile-background " variants={sidebar} />
			<Navigation toggle={() => toggleOpen()} />
			<Hamburger toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
