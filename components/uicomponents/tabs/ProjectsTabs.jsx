import React, { useContext, useState } from "react";
import Loader from "../Loader";
// import Fade from "react-reveal/Fade";
import ProjectsTabContent from "./ProjectsTabContent";
import ProjectsContext from "../../context/ProjectsContext";
import LangContext from "../../context/LangContext";

function ProjectsTabs() {
	const { isEng } = useContext(LangContext);
	const [toggleState, setToggleState] = useState("all");
	const { data, loading, error } = useContext(ProjectsContext);

	const [filteredData, setFilteredData] = useState([]);

	function handleAllClick(index) {
		setToggleState(index);
		setFilteredData(data);
	}

	function handleJsClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "javascript";
		});

		setFilteredData(filterData);
	}
	function handleReactClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "react";
		});

		setFilteredData(filterData);
	}
	function handleNextClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "next";
		});

		setFilteredData(filterData);
	}

	if (error) {
		return <div className="text-center bg-red-600 text-base-200 p-2 w-max mx-auto">{error}</div>;
	}

	return (
		<>
			<div className="tabs-header-container">
				{/* <Fade> */}
				<button className={toggleState === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleAllClick("all")}>
					{isEng ? "All" : "All"}
				</button>
				<button className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handleJsClick(1)}>
					Javascript
				</button>
				<button className={toggleState === 2 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleReactClick(2)}>
					ReactJs
				</button>
				<button className={toggleState === 3 ? " tab-header active-tab" : "tab-header "} onClick={() => handleNextClick(3)}>
					NextJs
				</button>
				{/* </Fade> */}
			</div>

			{loading ? (
				<Loader />
			) : (
				<>
					<div className={toggleState === "all" ? " active-tab-content tab-content" : "tab-content"}>
						<ProjectsTabContent data={data} />
					</div>
					<div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>
						<ProjectsTabContent data={filteredData} />
					</div>
					<div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>
						<ProjectsTabContent data={filteredData} />
					</div>
					<div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>
						<ProjectsTabContent data={filteredData} />
					</div>
				</>
			)}
		</>
	);
}

export default ProjectsTabs;
