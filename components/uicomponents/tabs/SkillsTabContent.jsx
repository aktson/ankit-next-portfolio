import React from "react";
import Image from "next/image";
import { cardVariantsParent, skillsCardVariants } from "../animationVariants/cardVariants.js";
import { motion } from "framer-motion";

function TabsInner({ data }) {
	return (
		<>
			{data &&
				data?.map((result) => {
					return (
						<motion.div
							key={result.id}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ amount: 0.8 }}
							variants={cardVariantsParent}>
							<motion.div
								className="skills tooltip-neutral text-base-100"
								data-tip={result.attributes.title}
								variants={skillsCardVariants}>
								<Image src={result.attributes.img.data.attributes.url} alt={result.attributes.title} width={32} height={32} />
								<p>{result.attributes.title}</p>
							</motion.div>
						</motion.div>
					);
				})}
		</>
	);
}

export default TabsInner;
