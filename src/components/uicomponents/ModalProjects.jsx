import React from "react";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "./Slider";
import ModalOverlay from "./ModalOverlay";
import { useLangContext } from "../context/LangContext";
import Portal from "../Portal";

function ModalProjects({ data, onClose, open, length }) {
	const { isEng } = useLangContext();
	if (!open) return null;

	const results = data.attributes;

	return (
		<Portal>
			<div className="p-4 md:flex justify-center items-center max-h-screen" id="my-modal">
				<ModalOverlay onClose={onClose} />
				<AnimatePresence>
					<motion.div
						className="max-w-2xl  bg-base-100 rounded-lg grid  grid-rows-auto md:grid-rows-2 mx-auto  "
						style={{ maxHeight: "850px", zIndex: "100" }}
						initial={{ y: -300 }}
						animate={{ y: 0 }}
						exit={{ y: 0 }}
						transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
						<Slider data={data} length={length} />
						<div className="card-body bg-base-100">
							<h3 className="card-title text-2xl mb-0">{results.title}</h3>
							<p className=" badge badge-primary badge-outline p-5 mb-3 ">{results.stack}</p>
							<p className=" mb-5 line-break overflow-y-auto styledScrollbar h-full">
								{isEng ? results.summaryEnglish : results.summary}
							</p>
							<div className="flex justify-between items-center">
								<div className="flex gap-2">
									{results.url && (
										<a
											href={results.url}
											target="_blank"
											className="cursor-pointer flex btn btn-sm btn-primary  rounded-2xl gap-2"
											rel="noreferrer">
											<FaExternalLinkAlt />
											{isEng ? "visit" : "besøk"}
										</a>
									)}
									<a
										href={results.github}
										target="_blank"
										className="cursor-pointer flex btn btn-sm   rounded-2xl btn-primary  gap-2"
										rel="noreferrer">
										<FaGithub />
										Github
									</a>
								</div>
								<button className="text-xl cursor-pointer " onClick={onClose}>
									<FaTimes />
								</button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</Portal>
	);
}

export default ModalProjects;
