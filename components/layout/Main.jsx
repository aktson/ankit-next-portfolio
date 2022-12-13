import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Social from "./Social";
import Hero from "../sections/Hero";
import ScrollIndicator from "../uicomponents/ScrollIndicator";
import Skills from "../sections/Skills";

function Main({ data }) {
	return (
		<main className="container max-w-full relative">
			<ScrollIndicator />
			<Hero />
			<About />
			<Skills data={data} />
			<Projects />
			<Contact />
			<Social />
		</main>
	);
}

export default Main;
