import React, { useContext } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
// import Header from "../layout/Header";
// import Zoom from "react-reveal/Zoom";
import LangContext from "../context/LangContext";
import bgLight from "../../public/images/hero.svg";
import bgDark from "../../public/images/hero-dark.svg";

function Hero() {
	const { isEng, isChecked } = useContext(LangContext);

	return (
		<section id="hero" className={` flex flex-col justify-center h-screen relative`}>
			<Image src={isChecked ? bgDark : bgLight} alt="background vector wavees" layout="fill" />
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-xl w-full">
					<h1>
						{/* <Zoom top cascade> */}
						<span className="text-4xl">{isEng ? "HELLO I'M" : "Hei! Jeg er"}</span>
						<br />
						<span className="text-primary"> ANKIT SONI,</span>
						{/* </Zoom> */}
						<br />
						{/* <Zoom left cascade> */}
						<span className="text-4xl">Front-end {isEng ? "developer" : "utvikler"} & Web Designer</span>
						{/* </Zoom> */}
					</h1>
					{/* <Zoom cascade> */}
					<Link className="btn btn-primary btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
						{isEng ? "See my work" : "Se mitt arbeid"}
					</Link>
					{/* </Zoom> */}
				</div>
			</div>
		</section>
	);
}

export default Hero;
