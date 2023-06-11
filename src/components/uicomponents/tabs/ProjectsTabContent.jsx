import React from "react";
import ProjectsCard from "../ProjectsCard";

function ProjectsTabContent({ data: projects }) {
	return (
		<>
			{projects &&
				projects?.map((items) => {
					const sliderImages = items.attributes.sliderImages.data;
					const length = sliderImages.length;

					return <ProjectsCard data={items} length={length} key={items.id} />;
				})}
		</>
	);
}

export default ProjectsTabContent;
