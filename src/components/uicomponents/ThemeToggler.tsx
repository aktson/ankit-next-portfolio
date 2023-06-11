/***** IMPORTS *****/
import { FC } from "react";
import { useLangContext } from "../context/LangContext";

/***** COMPONENT-FUNCTION *****/
export const ThemeToggler: FC = (): JSX.Element => {
	const { defaultTheme, setDefaultTheme, setIsChecked, isChecked } = useLangContext();
	if (typeof window !== "undefined") {
		// browser code
		const [html] = document.getElementsByTagName("html") as HTMLHtmlElement | null | any;
		html.setAttribute("data-theme", defaultTheme);
	}

	const changeTheme = () => {
		if (defaultTheme === "dark") {
			setDefaultTheme("light");
			setIsChecked((prev: boolean) => !prev);
		} else {
			setDefaultTheme("dark");
			setIsChecked((prev: boolean) => !prev);
		}
	};

	/*** Return Statement ***/
	return (
		<div className="form-control w-32 " style={{ zIndex: "251" }}>
			<label className="cursor-pointer label flex gap-1 sm:gap-0 px-0 ">
				<input
					type="checkbox"
					className="toggle toggle-primary bg-primary border-transparent"
					onClick={changeTheme}
					defaultChecked={isChecked}
				/>
				<span className="label-text text-base-100 sm:text-primary text-center text-md sm:text-sm">
					{isChecked ? "Light Mode" : "Dark Mode"}
				</span>
			</label>
		</div>
	);
};
