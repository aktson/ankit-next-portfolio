/***** IMPORTS *****/
import React, { FC } from "react";
import SkillsTabs from "../uicomponents/tabs/SkillsTabs";
import { useLangContext } from "../context/LangContext";
import Heading from "../uicomponents/animationVariants/Heading";
import { ISkills } from "@/types";

/***** TYPES *****/
interface SkillsProps {
	skills?: ISkills;
}

/***** COMPONENT-FUNCTION *****/
export const Skills: FC<SkillsProps> = ({ skills }): JSX.Element => {
	const isEng = useLangContext();
	/*** Return statement ***/
	return (
		<section className=" py-16 sm:py-32 px-1 min-h-screen  bg-base-200" id="skills">
			<div className=" max-w-5xl  mx-auto flex flex-col justify-center container items-center">
				<Heading heading={isEng ? "SKILLS" : "FERDIGHETER"} />
				<SkillsTabs skills={skills} />
			</div>
		</section>
	);
};
