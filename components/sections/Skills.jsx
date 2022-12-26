import React from "react";
import SkillsTabs from "../uicomponents/tabs/SkillsTabs";
import LangContext from "../context/LangContext";
import Heading from "../uicomponents/animationVariants/Heading";

function Skills(data) {
	const { isEng } = React.useContext(LangContext);
	return (
		<section className=" py-16 sm:py-32 px-1 min-h-screen  bg-base-200" id="skills">
			<div className=" max-w-5xl  mx-auto flex flex-col justify-center container items-center">
				<Heading heading={isEng ? "SKILLS" : "FERDIGHETER"} />
				<SkillsTabs data={data} />
			</div>
		</section>
	);
}

export default Skills;
