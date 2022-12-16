import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import LangContext from "../context/LangContext";
import bgLight from "../../public/images/hero.svg";
import bgDark from "../../public/images/hero-dark.svg";
import { motion } from "framer-motion";
import { wavyTextChild, wavyTextParent } from "../uicomponents/animationVariants/WavyText";

function Hero() {
	const { isEng, isChecked } = React.useContext(LangContext);

	const heading1 = isEng ? "Hello! I'M" : "Hei! Jeg er";
	const heading2 = "ANKIT SONI";
	const heading3 = isEng ? `Front-end Developer & Web Designer` : "Front-end Utvikler & Web Designer";

	const head1 = heading1.split("").map((letter, index) => {
		return (
			<motion.span key={index} variants={wavyTextChild} className="text-3xl">
				{letter}
			</motion.span>
		);
	});

	const head2 = heading2.split("").map((letter, index) => {
		return (
			<motion.span key={index} variants={wavyTextChild} className="text-primary">
				{letter}
			</motion.span>
		);
	});
	const head3 = heading3.split("").map((letter, index) => {
		return (
			<motion.span key={letter + "-" + index} variants={wavyTextChild} className="text-3xl">
				{letter}
			</motion.span>
		);
	});

	return (
		<section id="hero" className={` flex flex-col justify-center h-screen relative`}>
			<Image src={isChecked ? bgDark : bgLight} alt="background vector wavees" fill object-fit="cover" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<motion.h1 variants={wavyTextParent} initial="hidden" animate="visible">
						{head1}
						<br />
						{head2}
						<br />
						{head3}
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
