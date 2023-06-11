/***** IMPORTS *****/
import React, { FC } from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

/***** TYPES *****/
interface ToTopButtonProps {}

/***** COMPONENT-FUNCTION *****/
export const ToTopButton: FC<ToTopButtonProps> = (): JSX.Element => {
	/*** Return statement ***/
	return (
		<button
			id="to-top-btn"
			onClick={() => scroll.scrollToTop()}
			className="absolute bottom-36 sm:bottom-16 right-12  btn btn-primary  w-12 text-lg rounded-full text-base-100  p-3 ">
			<FaAngleUp />
		</button>
	);
};
