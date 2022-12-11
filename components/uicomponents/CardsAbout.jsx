import React, { useContext } from "react";
import { FaDesktop, FaWhmcs, FaMeteor, FaLightbulb } from "react-icons/fa";
// import LightSpeed from "react-reveal/LightSpeed";
import LangContext from "../context/LangContext";

function CardsAbout() {
	const { isEng } = useContext(LangContext);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  text-center container justify-center gap-2 p-8  mx-auto" id="cards">
			{/* <LightSpeed left> */}
			<div className="card card-compact bg-warning shadow-xl p-6">
				<FaDesktop size={60} className="about-icons" />

				<h3>Responsive</h3>
				<p>{isEng ? "Layouts that works on all the devices" : "Layouter som fungerer på alle enheter"}</p>
			</div>
			{/* </LightSpeed>
			<LightSpeed left> */}
			<div className="card card-compact bg-warning shadow-xl p-6">
				<FaWhmcs size={60} className="about-icons" />

				<h3>{isEng ? "Dynamic" : "Dynamisk"}</h3>
				<p>
					{isEng
						? "Websites does not have to be static. I love to bring them to life.. "
						: "Nettsteder trenger ikke å være statiske. Jeg elsker å få sider til å bli levende.."}
				</p>
			</div>
			{/* </LightSpeed>
			<LightSpeed right> */}
			<div className="card card-compact  bg-warning shadow-xl p-6">
				<FaLightbulb size={60} className="about-icons" />

				<h3> {isEng ? "Intuitive" : "Intuitivt"}</h3>
				<p>{isEng ? "Strong preference for user-friendly " : "Sterk preferanse for brukervennlig "}UX/UI</p>
			</div>
			{/* </LightSpeed>
			<LightSpeed right> */}
			<div className="card card-compact  bg-warning shadow-xl p-6">
				<FaMeteor size={60} className="about-icons" />

				<h3>{isEng ? "Fast" : "Raskt"}</h3>
				<p>
					{isEng
						? "Fast loading times and lag-free interaction, my top priority"
						: "Raske lastetider og forsinkelses fri interaksjon, min høyeste prioritet"}
				</p>
			</div>
			{/* </LightSpeed> */}
		</div>
	);
}

export default CardsAbout;
