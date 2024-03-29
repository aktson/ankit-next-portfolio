/***** IMPORTS *****/
import React, { FC } from "react";
import { useState, useEffect, useCallback } from "react";
import { ThemeToggler } from "@components/uicomponents/ThemeToggler";
import Image from "next/image";
import { useLangContext } from "@components/context/LangContext";
import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";
import LanguageSelect from "@components/uicomponents/LanguageSelect";
import darkLogo from "@public/images/logo-dark.svg";

/***** COMPONENT-FUNCTION *****/
export const Header: FC = (): JSX.Element => {
	const { isEng } = useLangContext();

	const [scrollY, setScrollY] = useState(0);

	const [showNavBar, setShowNavBar] = useState("");

	// const handleNavigation = useCallback(
	// 	(e) => {
	// 		if (typeof window !== "undefined") {
	// 			setScrollY(window.scrollY);

	// 			if (scrollY > window.scrollY) {
	// 				setShowNavBar("");
	// 			} else if (scrollY < window.scrollY) {
	// 				setShowNavBar("-translate-y-32");
	// 			}
	// 			setScrollY(window.scrollY);
	// 		}
	// 	},
	// 	[scrollY]
	// );

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleNavigation);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleNavigation);
	// 	};
	// }, [handleNavigation]);

	/*** Return statement ***/
	return (
		<header
			className={` absolute  top-0 left-0 right-0 flex items-center justify-center z-40 sm:p-4 shadow-xl sm:shadow-none ${showNavBar} transition-all duration-300 `}>
			<div className="container flex justify-around md:justify-between gap-2 p-2 items-center flex-col sm:flex-row sm:bg-base-200 sm:shadow-xl rounded-full ">
				{/* logo */}
				<figure className=" xl:w-96 p-2 ml-3" onClick={() => scroll.scrollToTop()}>
					<Image src={darkLogo} alt="ankit soni logo" width={55} height={55} />
				</figure>
				{/* navigation for large screens */}
				<nav className="hidden lg:flex items-center w-full justify-center">
					<ul className="flex items-center gap-2">
						<li>
							<Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Home" : "Heim"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "About Me" : "Om Meg"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Skills" : "Ferdigheter"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Projects" : "Prosjekter"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Contact" : "Kontakt"}
							</Link>
						</li>
					</ul>
				</nav>
				{/* change language and theme */}
				<div className="hidden sm:flex justify-between w-full items-center sm:w-auto gap-4 xl:w-96">
					<ThemeToggler />
					<LanguageSelect />
				</div>
				{/* nvagiation for small to medium screen */}
				<SideBar />
			</div>
		</header>
	);
};
