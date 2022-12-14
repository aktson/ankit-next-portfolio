import React, { useContext } from "react";
import ProjectsTabs from "../uicomponents/tabs/ProjectsTabs";
import LangContext from "../context/LangContext";

function Projects() {
	const { isEng } = useContext(LangContext);

	const para1 = isEng
		? "During my studies I have worked on many school and personal practice projects which can be found on"
		: "I løpet av studiene har jeg jobbet med mange skole- og praksis prosjekter som kan finnes på";

	const para2 = isEng
		? ", here are some of them developed with different tools and technology"
		: ", her er noen av dem utviklet med ulike verktøy og teknologi";

	return (
		<section className=" py-16 sm:py-32 px-1" id="projects">
			<div className="container flex flex-col justify-center mx-auto items-center">
				<h2>{isEng ? "PROJECTS" : "PROSJEKTER"}</h2>

				<p className="max-w-3xl text-center mb-8">
					{para1}
					<a href="https://github.com/aktson?tab=repositories" target="_blank" rel="noreferrer" className="text-accent ml-1">
						github
					</a>
					{para2}
				</p>
				<ProjectsTabs />
			</div>
		</section>
	);
}

export default Projects;
