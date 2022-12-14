import React, { useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import SkillsTabContent from "./SkillsTabContent";
import LangContext from "../../context/LangContext";
import { cardVariants, cardVariantsParent } from "../animationVariants/cardVariants";
import { motion } from "framer-motion";

function Tabs({ data }) {
	const { isEng } = useContext(LangContext);
	const [toggleState, setToggleState] = useState("all");
	const [error, setError] = useState(null);

	const [filteredData, setFilteredData] = useState([]);
	const loading = false;

	useEffect(() => {
		data.data.error && setError(`${data.data.error.status}: Failed to fetch`);
		return;
	}, [data.data.error]);

	console.log();
	const skillsData = data.data;

	function handleAllClick(index) {
		setToggleState(index);
		setFilteredData(skillsData.data);
	}

	function handleFrontendClick(index) {
		setToggleState(index);

		const filterData = skillsData.data.filter((result) => {
			return result.attributes.category === "frammework";
		});

		setFilteredData(filterData);
	}
	function handleDesignClick(index) {
		setToggleState(index);

		const filterData = skillsData.data.filter((result) => {
			return result.attributes.category === "design";
		});

		setFilteredData(filterData);
	}
	function handleOtherClick(index) {
		setToggleState(index);

		const filterData = skillsData.data.filter((result) => {
			return result.attributes.category === "cms";
		});

		setFilteredData(filterData);
	}
	if (error) {
		return <p className="text-center bg-red-600 p-4  rounded-xl  mx-auto">{error}</p>;
	}

	return (
		<>
			<div className="tabs-header-container">
				{/* <Fade> */}
				<button className={toggleState === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleAllClick("all")}>
					{isEng ? "All" : "All"}
				</button>
				<button className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handleFrontendClick(1)}>
					{isEng ? "Frammework" : "Rammeverk"}
				</button>
				<button className={toggleState === 2 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleDesignClick(2)}>
					Design
				</button>
				<button className={toggleState === 3 ? " tab-header active-tab" : "tab-header "} onClick={() => handleOtherClick(3)}>
					CMS/{isEng ? "Other" : "Andre"}
				</button>
				{/* </Fade> */}
			</div>

			{loading ? (
				<Loader />
			) : (
				<div className="tabs-content">
					<div className={toggleState === "all" ? " active-tab-content tab-content" : "tab-content"}>
						<SkillsTabContent data={skillsData.data} />
					</div>
					<div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>
						<SkillsTabContent data={filteredData} />
					</div>
					<div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>
						<SkillsTabContent data={filteredData} />
					</div>
					<div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>
						<SkillsTabContent data={filteredData} />
					</div>
				</div>
			)}
		</>
	);
}
export default Tabs;
