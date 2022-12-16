import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import LangContext from "../context/LangContext";
import bgLight from "../../public/images/hero.svg";
import bgDark from "../../public/images/hero-dark.svg";
import { motion } from "framer-motion";
import { wavyTextParent } from "../uicomponents/animationVariants/WavyText";
import HeroHeading from "../uicomponents/animationVariants/HeroHeading";

function Hero() {
	const { isEng, isChecked } = React.useContext(LangContext);

	const heading1 = isEng ? "Hello! I'M" : "Hei! Jeg er";
	const heading2 = "ANKIT SONI";
	const heading3 = isEng ? `Front-end Developer & Web Designer` : "Front-end Utvikler & Web Designer";

	return (
		<section id="hero" className={` flex flex-col justify-center h-screen relative`}>
			<Image src={isChecked ? bgDark : bgLight} alt="background vector wavees" fill object-fit="cover" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<motion.h1
						variants={wavyTextParent}
						initial="hidden"
						animate="visible"
						className="flex justify-center flex-col items-center leading-loose gap-5">
						<HeroHeading heading={heading1} font="text-3xl" />
						<HeroHeading heading={heading2} font="text-primary  text-6xl" />
						<HeroHeading heading={heading3} font="text-3xl" />
					</motion.h1>
					<Link className="btn btn-primary btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
						{isEng ? "See my work" : "Se mitt arbeid"}
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Hero;
