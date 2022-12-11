import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function ToTopButton() {
	return (
		<div id="to-top-btn" onClick={() => scroll.scrollToTop()}>
			<FaAngleUp />
		</div>
	);
}

export default ToTopButton;
