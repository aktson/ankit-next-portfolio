import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Social from "./Social";
import Hero from "../sections/Hero";
import ScrollIndicator from "../uicomponents/ScrollIndicator";
import Skills from "../sections/Skills";
import { motion, useScroll } from "framer-motion";

function Main({ data }) {
	const { scrollYProgress } = useScroll();

	return (
		<motion.main className="container max-w-full relativev">
			{/* <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}></motion.div> */}
			<ScrollIndicator />
			<Hero />
			<About />
			<Skills data={data} />
			<Projects />
			<Contact />
			<Social />
		</motion.main>
	);
}

export default Main;
