/***** IMPORTS *****/
import React from "react";
import { Home } from "./Home";

const baseUrl = "https://portfolio-railway.onrender.com/";

async function getSkills() {
	try {
		const response = await fetch(baseUrl + "api/categories?populate=*");

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
export default async function page() {
	const skills = await getSkills();
	const projects = await fetchProjects();

	/*** Return Statement ***/
	return <Home projects={projects} skills={skills} />;
}
