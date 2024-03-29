import React, { useState, useEffect } from "react";
import Image from "next/image";
import ModalProjects from "./ModalProjects";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectCardVariants, skillsCardVariants, cardVariantsParent } from "./animationVariants/animationVariants";

function ProjectsCard({ data, length }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = (event) => {
			if (isOpen) {
				event.preventDefault();
			}
		};

		if (isOpen) {
			document.body.addEventListener("scroll", handleScroll, { passive: false });
		} else {
			document.body.removeEventListener("scroll", handleScroll);
		}

		return () => {
			document.body.removeEventListener("scroll", handleScroll);
		};
	}, [isOpen]);

	const id = data.id;
	const cardImage = data.attributes.image.data.attributes.url;
	const results = data.attributes;

	const mappedStackImg = results.stacks.data.map((stackImage) => {
		return (
			<figure
				data-tip={stackImage.attributes.name}
				style={{ width: "1.25rem", height: "1.25rem" }}
				className={`tooltip tooltip-neutral text-base-100 
				flex justify-center items-center  rounded-full text-center shadow-lg shadow-neutral bg-neutral `}
				key={stackImage.id}>
				<Image src={stackImage.attributes.url} alt={stackImage.attributes.name} width={25} height={25} className="object-cover " />
			</figure>
		);
	});

	return (
		<motion.div initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8 }} variants={cardVariantsParent}>
			<motion.div className="shadow-lg bg-base-200 w-96 rounded-lg" variants={projectCardVariants}>
				<div
					className=" max-w-lg sm:h-80 sm:w-full h-80 w-full rounded-t-lg"
					style={{
						background: `url(${cardImage}) no-repeat center `,
						backgroundSize: "cover",
						clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 82%)",
					}}></div>
				<div className=" w-full p-8 relative">
					<h3>{results.title}</h3>
					<div className="flex gap-4 mt-5 ">{mappedStackImg}</div>
					<button className="btn btn-secondary absolute rounded-full -top-6 right-2 shadow-xl " onClick={() => setIsOpen(true)} key={id}>
						<FaAngleRight />
					</button>
					{isOpen && <ModalProjects open={isOpen} data={data} length={length} onClose={() => setIsOpen(false)} />}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ProjectsCard;
