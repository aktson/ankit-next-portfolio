/***** IMPORTS *****/
import React from "react";
import { Home } from "./Home";

const baseUrl = "https://ankson.up.railway.app/";

export async function getSkills() {
	try {
		const response = await fetch("https://ankson.up.railway.app/api/categories?populate=*");

		const data = await response.json();
		if (response.ok) {
			return data;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}

async function fetchProjects() {
	const url = baseUrl + "api/projects?populate=*";

	const response = await fetch(url);

	try {
		const data = await response.json();

		if (response.ok) {
			return data;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}

/***** COMPONENT-FUNCTION *****/
async function page() {
	const skills = await getSkills();
	const projects = await fetchProjects();

	/*** Return Statement ***/
	return <Home projects={projects} skills={skills} />;
}
export default page;
