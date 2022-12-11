import React, { useContext } from "react";
import ankit from "../../public/assets/ankitLightGray.jpg";
import CardsAbout from "../uicomponents/CardsAbout";
import Image from "next/image";
// import Zoom from "react-reveal/Zoom";
// import Flip from "react-reveal/Flip";
import LangContext from "../context/LangContext";

function About() {
	const { isEng } = useContext(LangContext);
	const paragraph = isEng
		? "Build state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine, the goal is to become Full-stack."
		: "Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg, målet er å bli Full-stack.";

	return (
		<section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen" id="about">
			{/* <Flip right cascade> */}
			<h2>{isEng ? "ABOUT ME" : "OM MEG"}</h2>
			{/* </Flip> */}
			<div className="grid lg:grid-cols-1 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
				<div className="p-2  flex flex-col items-center text-center" id="about-img">
					{/* <Zoom bottom cascade> */}
					<figure>
						<Image src={ankit} alt="ankit soni" className="mb-8 mask mask-hexagon-2 " width={240} height={240} />
					</figure>
					{/* </Zoom> */}
					<div className="max-w-xl">
						{/* <Flip left cascade> */}
						<p>{paragraph}</p>
						{/* </Flip> */}
					</div>
				</div>
				<CardsAbout />
			</div>
		</section>
	);
}

export default About;
