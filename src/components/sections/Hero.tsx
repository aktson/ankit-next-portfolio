import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { useLangContext } from "../context/LangContext";
import bgDark from "@public/images/hero-dark.svg";
import { motion } from "framer-motion";
import { wavyTextParent } from "@components/uicomponents/animationVariants/wavyText";
import HeroHeading from "@components/uicomponents/animationVariants/HeroHeading";

export function Hero() {
	const { isEng } = useLangContext();

	const heading1 = isEng ? "Hi! I'M " : "Hei! Jeg er";
	const heading2 = "Ankit Soni";
	const heading3 = isEng ? "Front-end Developer" : "Front-end Utvikler";
	// const heading4 = "Web Designer";

	return (
		<section id="hero" className={` flex flex-col justify-center min-h-screen relative`}>
			<Image src={bgDark} alt="background vector wavees" fill object-fit="cover" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<motion.h1
						variants={wavyTextParent}
						initial="hidden"
						animate="visible"
						className="flex justify-center flex-col items-center leading-loose gap-2 text-center flex-wrap">
						<HeroHeading heading={heading1} font="text-3xl " />
						<HeroHeading heading={heading2} font="text-primary  text-4xl sm:text-5xl my-2 " />
						<div className="flex flex-wrap justify-center">
							<HeroHeading heading={heading3} font="text-3xl " />
							{/* <HeroHeading heading={heading4} font="text-3xl " /> */}
						</div>
					</motion.h1>
					<Link className="btn btn-primary btn-md sm:btn-wide rounded-xl " to="about" smooth={true} duration={500}>
						{isEng ? "See my work" : "Se mitt arbeid"}
					</Link>
				</div>
			</div>
		</section>
	);
}
