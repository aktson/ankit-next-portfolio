import React, { useContext } from "react";
import LangContext from "../context/LangContext";
import engFlag from "../../public/assets/united-states.png";
import norFlag from "../../public/assets/norway.png";

function LanguageSelect() {
	const { setIsEng, isEng } = useContext(LangContext);

	const handleChange = (event) => {
		if (event.target.value === "no") {
			setIsEng(false);
		}
		if (event.target.value === "en") {
			setIsEng(true);
		}
	};
	return (
		<div className="flex items-center ">
			<figure>
				{isEng ? <img src={engFlag} alt="american flag" className="w-8" /> : <img src={norFlag} alt="norwegian flag" className="w-8" />}
			</figure>
			<select
				className="select w-18 border-none  outline-0 focus:outline-transparent focus:border-transparent text-base-100 sm:text-primary bg-transparent "
				onChange={handleChange}>
				<option value="no">NO</option>
				<option value="en">EN</option>
			</select>
		</div>
	);
}

export default LanguageSelect;
