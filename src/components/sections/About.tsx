import React, { useRef } from "react";
import ankit from "@public/images/ankitLightGray.jpg";
import CardsAbout from "@components/uicomponents/CardsAbout";
import Image from "next/image";
import { useLangContext } from "@components/context/LangContext";
import Heading from "@components/uicomponents/animationVariants/Heading";

export function About() {
	const ref = useRef(null);

	const { isEng } = useLangContext();
	const paragraph = isEng
		? "Build state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine, the goal is to become Full-stack."
		: "Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg, målet er å bli Full-stack.";

	return (
		<section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:min-h-screen origin-left" id="about">
			<Heading heading={isEng ? "ABOUT ME" : "OM MEG"} />
			<div className="grid lg:grid-cols-1 md:grid-col-2 sm:grid-cols-1 gap-8 p-4 ">
				<div className="p-2  flex flex-col items-center text-center" id="about-img">
					<figure>
						<Image src={ankit} alt="ankit soni" className="mb-8 mask mask-hexagon-2 " width={240} height={240} />
					</figure>
					<div className="max-w-xl">
						<p>{paragraph}</p>
					</div>
				</div>
				<CardsAbout />
			</div>
		</section>
	);
}
