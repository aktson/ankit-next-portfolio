import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import LangContext from "../context/LangContext";
import bgLight from "../../public/images/hero.svg";
import bgDark from "../../public/images/hero-dark.svg";
import { motion } from "framer-motion";

function Hero() {
	const { isEng, isChecked } = React.useContext(LangContext);

	const heading1 = isEng ? "Hello! I'M" : "Hei! Jeg er";
	const heading2 = "ANKIT SONI";
	const heading3 = isEng ? "Front-end Developer & Web Designer" : "Front-end Utvikler & Web Designer";

	const parent = {
		hidden: {
			opacity: 0,
		},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: i * 0.1,
			},
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 200,
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 200,
			},
		},
	};

	const head1 = heading1.split("").map((char, index) => {
		return (
			<motion.span key={char + "-" + index} variants={child} className="text-4xl">
				{char}
			</motion.span>
		);
	});

	const head2 = heading2.split("").map((char, index) => {
		return (
			<motion.span key={char + "-" + index} variants={child} className="text-primary">
				{char}
			</motion.span>
		);
	});
	const head3 = heading3.split("").map((char, index) => {
		return (
			<motion.span key={char + "-" + index} variants={child} className="text-4xl">
				{char}
			</motion.span>
		);
	});

	return (
		<section id="hero" className={` flex flex-col justify-center h-screen relative`}>
			<Image src={isChecked ? bgDark : bgLight} alt="background vector wavees" layout="fill" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<motion.h1 variants={parent} initial="hidden" animate="visible">
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
