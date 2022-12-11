import React, { useContext, useState } from "react";
import { baseUrl } from "../../constants/settings";
import Loader from "../Loader";
import useFetch from "../../customHook/useFetch";
// import Fade from "react-reveal/Fade";
import SkillsTabContent from "./SkillsTabContent";
import LangContext from "../../context/LangContext";

function Tabs() {
	const { isEng } = useContext(LangContext);
	const [toggleState, setToggleState] = useState("all");

	const [filteredData, setFilteredData] = useState([]);

	const url = baseUrl + "api/categories?populate=*";
	const { data, loading, error } = useFetch(url);

	function handleAllClick(index) {
		setToggleState(index);
		setFilteredData(data);
	}

	function handleFrontendClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "frammework";
		});

		setFilteredData(filterData);
	}
	function handleDesignClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "design";
		});

		setFilteredData(filterData);
	}
	function handleOtherClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "cms";
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
						<SkillsTabContent data={data} />
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
