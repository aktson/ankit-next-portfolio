import React, { createContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
    const [isEng, setIsEng] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
    const [defaultTheme, setDefaultTheme] = useState("dark");

    return <LangContext.Provider value={{
        isEng, setIsEng, isChecked, setIsChecked, defaultTheme, setDefaultTheme
    }}>
        {children}
    </LangContext.Provider>;


}
export default LangContext;