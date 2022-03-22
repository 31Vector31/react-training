import React, {useContext} from "react";
import translations from "./translations.json";
import {LangContext} from "./Main/Main";

function TextWrapper({languageKey}) {
    const {language} = useContext(LangContext);
    return <>{translations[language][languageKey]}</>;
}

export default TextWrapper;