import {useEffect} from 'react'
import { useLocalStorage} from "./useLocalStorage";


export const useDarkMode = (boolean) => {
    const [someValue, setSomeValue] = useLocalStorage(boolean, false);

    const darkMode = useEffect(() => {
        if (someValue) {
            document.body.className = 'dark-mode'
        }
        else {
            document.body.className = ''
        }

    },[someValue]);

    const setDarkMode = () => {
        setSomeValue(!someValue)
    };

    return [darkMode, setDarkMode];
};