import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function ToTopButton() {
	return (
		<button
			id="to-top-btn"
			onClick={() => scroll.scrollToTop()}
			className="absolute bottom-36 sm:bottom-20 right-12  btn btn-primary  w-12 text-lg rounded-full text-base-100  p-3 ">
			<FaAngleUp />
		</button>
	);
}

export default ToTopButton;
