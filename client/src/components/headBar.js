import React from'react';
import {useDarkMode} from "../hooks/useDarkMode";

const HeadBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className={'navbar'}>
            <h1>Women's World Cup</h1>
            <button onClick={toggleMode}>DarkMode</button>
        </nav>
    )
};
export default HeadBar