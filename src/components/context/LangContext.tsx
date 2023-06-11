import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface LangContextProps {
	isEng: boolean;
	isChecked: boolean;
	defaultTheme: string;
	setIsEng: Dispatch<SetStateAction<boolean>>;
	setIsChecked: Dispatch<SetStateAction<boolean>>;
	setDefaultTheme: Dispatch<SetStateAction<string>>;
}

const initialValue = {
	isEng: false,
	isChecked: false,
	defaultTheme: "dark",
	setIsEng: () => {},
	setIsChecked: () => {},
	setDefaultTheme: () => {},
};

const LangContext = createContext<LangContextProps>(initialValue);

export function LangProvider({ children }: { children: React.ReactNode }) {
	const [isEng, setIsEng] = useState(false);
	const [isChecked, setIsChecked] = useState(true);
	const [defaultTheme, setDefaultTheme] = useState("dark");

	return (
		<LangContext.Provider
			value={{
				isEng,
				setIsEng,
				isChecked,
				setDefaultTheme,
				setIsChecked,
				defaultTheme,
			}}>
			{children}
		</LangContext.Provider>
	);
}

export const useLangContext = () => useContext(LangContext);
