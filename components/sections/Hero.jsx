import React, { useContext } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
// import Header from "../layout/Header";
// import Zoom from "react-reveal/Zoom";
import LangContext from "../context/LangContext";
import bgDark from "../../public/assets/hero-dark.svg";
import bgLight from "../../public/assets/hero.svg";

function Hero() {
	const { isEng, isChecked } = useContext(LangContext);
	const styles = {
		backgroundImage: url(`${isChecked ? bgDark : bgLight}`),
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};
	return (
		<section id="hero" className={` flex flex-col justify-center h-screen ${isChecked ? " bg-dark" : "bg-light"}`} style={{ styles }}>
			{/* <Header /> */}
			<div className="container  mx-auto px-1 relative flex items-center justify-center text-center">
				<div className="p-2 max-w-md w-full">
					<h1>
						{/* <Zoom top cascade> */}
						{isEng ? "HELLO I'M" : "Hei! Jeg heter"}
						<span className="text-primary"> ANKIT SONI,</span>
						{/* </Zoom> */}
						<br />
						{/* <Zoom left cascade> */}
						<span>Front-end {isEng ? "developer" : "utvikler"}</span>
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
