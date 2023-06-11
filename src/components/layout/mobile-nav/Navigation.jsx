import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useLangContext } from "../../context/LangContext";
import { ThemeToggler } from "@components/uicomponents/ThemeToggler";
import LanguageSelect from "../../uicomponents/LanguageSelect";

export function Navigation({ toggle }) {
	const { isEng } = useLangContext();

	const variantsLi = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};
	const variants = {
		open: {
			x: 0,
			opacity: 1,
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			x: -250,
			opacity: 0,
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};
	return (
		<motion.ul variants={variants} className="mob-ul ">
			<motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
				<Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="mob-li  nav-li" onClick={toggle}>
					{isEng ? "Home" : "Heim"}
				</Link>
			</motion.li>
			<motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
				<Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="mob-li nav-li " onClick={toggle}>
					{isEng ? "About Me" : "Om Meg"}
				</Link>
			</motion.li>
			<motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
				<Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="mob-li nav-li " onClick={toggle}>
					{isEng ? "Skills" : "Ferdigheter"}
				</Link>
			</motion.li>
			<motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
				<Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="mob-li nav-li " onClick={toggle}>
					{isEng ? "Projects" : "Prosjekter"}
				</Link>
			</motion.li>
			<motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
				<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="mob-li nav-li " onClick={toggle}>
					{isEng ? "Contact" : "Kontakt"}
				</Link>
			</motion.li>
			<motion.li className="flex flex-col sm:hidden">
				<LanguageSelect />
				<ThemeToggler />
			</motion.li>
		</motion.ul>
	);
}
