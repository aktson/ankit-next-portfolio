import React from "react";
import { useContext, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import LangContext from "../context/LangContext";
import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";
import Themes from "../uicomponents/Themes";
import LanguageSelect from "../uicomponents/LanguageSelect";
import lightLogo from "../../public/images/logo-light.svg";
import darkLogo from "../../public/images/logo-dark.svg";

function Header() {
	const { isEng, isChecked } = useContext(LangContext);

	const [scrollY, setScrollY] = useState(0);

	const [showNavBar, setShowNavBar] = useState("");

	const handleNavigation = useCallback(
		(e) => {
			if (typeof window !== "undefined") {
				setScrollY(window.scrollY);

				if (scrollY > window.scrollY) {
					setShowNavBar("");
				} else if (scrollY < window.scrollY) {
					setShowNavBar("-translate-y-32");
				}
				setScrollY(window.scrollY);
			}
		},
		[scrollY]
	);

	useEffect(() => {
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<header
			className={` absolute lg:fixed top-0 left-0 right-0 flex items-center justify-center z-40 sm:py-4  shadow-xl sm:shadow-none ${showNavBar} transition-all duration-300 `}>
			<div className="container flex justify-around md:justify-between gap-2 p-4 py-4 items-center flex-col sm:flex-row sm:bg-warning sm:shadow-xl rounded-full ">
				{/* logo */}
				<figure className=" xl:w-96 p-2 ml-3" onClick={() => scroll.scrollToTop()}>
					<Image src={isChecked ? darkLogo : lightLogo} alt="ankit soni logo" width={55} height={55} />
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
					<Themes />
					<LanguageSelect />
				</div>
				{/* nvagiation for small to medium screen */}
				<SideBar />
			</div>
		</header>
	);
}

export default Header;
