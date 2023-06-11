import React, { useEffect, useState, Suspense } from "react";
import Loader from "../Loader";
import SkillsTabContent from "./SkillsTabContent";
import { useLangContext } from "../../context/LangContext";

function Tabs({ skills }) {
	const { isEng } = useLangContext();
	const [active, setActive] = useState("all");
	const [filteredData, setFilteredData] = useState([]);

	function handleClick(type) {
		switch (type) {
			case "frontend":
				const frontendData = skills.filter((result) => {
					return result.attributes.category === "frammework";
				});
				setActive("frontend");
				setFilteredData(frontendData);
				break;
			case "design":
				const designData = skills.filter((result) => {
					return result.attributes.category === "design";
				});
				setActive("design");
				setFilteredData(designData);
				break;
			case "other":
				const otherData = skills.filter((result) => {
					return result.attributes.category === "cms";
				});
				setActive("other");
				setFilteredData(otherData);
				break;

			default:
				setActive("all");
				setFilteredData(skills);
		}
	}
	useEffect(() => {
		if (skills) setFilteredData(skills);
	}, [skills]);

	return (
		<>
			<div className="tabs-header-container bg-base-100">
				{/* <Fade> */}
				<button className={active === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleClick("all")}>
					{isEng ? "All" : "All"}
				</button>
				<button className={active === "frontend" ? " tab-header active-tab" : "tab-header"} onClick={() => handleClick("frontend")}>
					{isEng ? "Frammework" : "Rammeverk"}
				</button>
				<button className={active === "design" ? " tab-header  active-tab" : "tab-header "} onClick={() => handleClick("design")}>
					Design
				</button>
				<button className={active === "other" ? " tab-header active-tab" : "tab-header "} onClick={() => handleClick("other")}>
					CMS/{isEng ? "Other" : "Andre"}
				</button>
				{/* </Fade> */}
			</div>

			<Suspense fallback={<Loader />}>
				<div className="tabs-content">
					<div className={active ? " active-tab-content tab-content" : "tab-content"}>
						<SkillsTabContent data={filteredData} />
					</div>
				</div>
			</Suspense>
		</>
	);
}
export default Tabs;
