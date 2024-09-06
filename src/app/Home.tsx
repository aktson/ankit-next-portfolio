"use client";
/***** IMPORTS *****/
import { LangProvider } from "@/components/context/LangContext";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Social } from "@/components/layout/Social";
import React, { FC } from "react";
import { ScrollIndicator } from "@components/uicomponents/ScrollIndicator";
import { Hero } from "@components/sections/Hero";
import { About } from "@components/sections/About";
import { Contact } from "@components/sections/Contact";
import { Skills } from "@components/sections/Skills";
import { Projects } from "@components/sections/Projects";
import { motion, useScroll } from "framer-motion";
import { IProject, ISkills } from "@/types";


interface IPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
/***** TYPES *****/
interface HomeProps {
	projects?: { data: IProject[]; meta: { pagination: IPagination } };
	skills?: { data: ISkills; meta: { pagination: IPagination } };
}



/***** COMPONENT-FUNCTION *****/
export const Home: FC<HomeProps> = async ({ projects, skills }): Promise<JSX.Element> => {

	const projectsData = projects?.data.sort((a, b) => {
		const aPublishedDate = new Date(a.attributes.createdAt).getTime();
		const bPublishedDate = new Date(b.attributes.createdAt).getTime();

		return bPublishedDate - aPublishedDate;
	});

	const skillsData = skills?.data;

	/*** Return statement ***/
	return (
		<LangProvider>
			<Header />
			<motion.main className="container max-w-full relativev">
				{/* <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}></motion.div> */}
				<ScrollIndicator />
				<Hero />
				<About />
				<Skills skills={skillsData} />
				<Projects projects={projectsData!} />
				<Contact />
				<Social />
			</motion.main>
			<Footer />
		</LangProvider>
	);
};
