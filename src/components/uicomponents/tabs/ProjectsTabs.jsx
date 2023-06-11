import React, { Suspense, useState, useEffect } from "react";
import Loader from "../Loader";
import { motion } from "framer-motion";
import ProjectsTabContent from "./ProjectsTabContent";
import { cardVariants, cardVariantsParent } from "../animationVariants/animationVariants";

function ProjectsTabs({ projects: data }) {
	const [active, setActive] = useState("all");

	const [filteredData, setFilteredData] = useState([]);

	function handleClick(type) {
		switch (type) {
			case "js":
				const jsData = data.filter((result) => {
					return result.attributes.category === "javascript";
				});
				setActive("js");
				setFilteredData(jsData);
				break;
			case "react":
				const reactData = data.filter((result) => {
					return result.attributes.category === "react";
				});
				setActive("react");
				setFilteredData(reactData);
				break;

			default:
				setActive("all");
				setFilteredData(data);
		}
	}

	useEffect(() => {
		if (data) setFilteredData(data);
	}, [data]);

	return (
		<>
			<div className="tabs-header-projects">
				<button className={active === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleClick("all")}>
					All
				</button>
				<button className={active === "js" ? " tab-header active-tab" : "tab-header"} onClick={() => handleClick("js")}>
					Javascript
				</button>
				<button className={active === "react" ? " tab-header  active-tab" : "tab-header "} onClick={() => handleClick("react")}>
					React / Next
				</button>
			</div>

			<Suspense fallback={<Loader />}>
				<motion.div
					className={active ? " active-tab-content tab-content" : "tab-content"}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ amount: 0.8 }}
					variants={cardVariantsParent}>
					<ProjectsTabContent data={filteredData} variants={cardVariants} />
				</motion.div>
			</Suspense>
		</>
	);
}

export default ProjectsTabs;
