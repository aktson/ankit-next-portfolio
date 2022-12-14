import React, { useContext } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
// import Header from "../layout/Header";
// import Zoom from "react-reveal/Zoom";
import LangContext from "../context/LangContext";
import bgLight from "../../public/images/hero.svg";
import bgDark from "../../public/images/hero-dark.svg";
import { motion, Variants } from "framer-motion";

function Hero() {
	const { isEng, isChecked } = useContext(LangContext);

	const textVariant = {
		offscreen: {
			scale: 0.2,
		},
		onscreen: {
			scale: 1,

			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1,
			},
		},
	};

	const textVariant2 = {
		offscreen: {
			translateX: 200,
			opacity: 0,
		},
		onscreen: {
			translateX: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1,
			},
		},
	};

	return (
		<motion.section
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ amount: 0.8 }}
			id="hero"
			className={` flex flex-col justify-center h-screen relative`}>
			<Image src={isChecked ? bgDark : bgLight} alt="background vector wavees" layout="fill" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<h1>
						{/* <Zoom top cascade> */}
						<motion.span className="text-4xl" variants={textVariant}>
							{isEng ? "HELLO I'M" : "Hei! Jeg er"}
						</motion.span>
						<br />
						<motion.span className="text-primary" variants={textVariant2}>
							ANKIT SONI,
						</motion.span>
						{/* </Zoom> */}
						<br />
						{/* <Zoom left cascade> */}
						<motion.span className="text-4xl" variants={textVariant}>
							Front-end {isEng ? "developer" : "utvikler"} & Web Designer
						</motion.span>
						{/* </Zoom> */}
					</h1>
					{/* <Zoom cascade> */}
					<Link className="btn btn-primary btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
						{isEng ? "See my work" : "Se mitt arbeid"}
					</Link>
					{/* </Zoom> */}
				</div>
			</div>
		</motion.section>
	);
}

export default Hero;
