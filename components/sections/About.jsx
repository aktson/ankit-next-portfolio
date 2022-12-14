import React, { useContext, useRef } from "react";
import ankit from "../../public/images/ankitLightGray.jpg";
import CardsAbout from "../uicomponents/CardsAbout";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import LangContext from "../context/LangContext";
import { imageVariant } from "../uicomponents/animationVariants/imageVariants";
import { parentContainerAbout } from "../uicomponents/animationVariants/parentContainers";

function About() {
	const ref = useRef(null);

	const { isEng } = useContext(LangContext);
	const paragraph = isEng
		? "Build state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine, the goal is to become Full-stack."
		: "Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg, målet er å bli Full-stack.";

	return (
		<section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen origin-left" id="about">
			<h2>{isEng ? "ABOUT ME" : "OM MEG"}</h2>
			<motion.div
				className="grid lg:grid-cols-1 md:grid-col-2 sm:grid-cols-1 gap-8 p-4 "
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				variants={parentContainerAbout}>
				<div className="p-2  flex flex-col items-center text-center" id="about-img">
					<motion.figure variants={imageVariant}>
						<Image src={ankit} alt="ankit soni" className="mb-8 mask mask-hexagon-2 " width={240} height={240} />
					</motion.figure>
					<div className="max-w-xl">
						<p>{paragraph}</p>
					</div>
				</div>
				<CardsAbout />
			</motion.div>
		</section>
	);
}

export default About;
