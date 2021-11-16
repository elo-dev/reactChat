import { createContext, useContext, useState } from "react"
import { changeCssVariables } from "../services/changeCssVariables"
import { storage } from "../services/storage"

export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'

const ThemeContext = createContext()

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(storage.getItem('theme') || LIGHT_THEME)

    changeCssVariables(theme)
    const changeTheme = (theme) => {
        changeCssVariables(theme)
        setTheme(theme)
        storage.setItem('theme', theme)
    }

    return(
        <ThemeContext.Provider value={{changeTheme, theme}}{...props}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)