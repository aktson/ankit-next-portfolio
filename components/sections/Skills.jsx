import React, { useContext } from "react";
// import Progress from "../uicomponents/Progress";
import SkillsTabs from "../uicomponents/tabs/SkillsTabs";
// import Flip from "react-reveal/Flip";
import LangContext from "../context/LangContext";

function Skills() {
	const { isEng } = useContext(LangContext);
	return (
		<section className=" py-16 sm:py-32 px-1 lg:h-screen  bg-base-200" id="skills">
			<div className=" max-w-5xl  mx-auto flex flex-col justify-center container">
				{/* <Flip cascade> */}
				<h2 className="text-center mx-auto">{isEng ? "SKILLS" : "FERDIGHETER"}</h2>
				{/* </Flip> */}
				{/* <Progress /> */}
				<SkillsTabs />
			</div>
		</section>
	);
}

export default Skills;
