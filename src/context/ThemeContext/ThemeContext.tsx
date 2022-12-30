// definicion de lo que se va a compartir a lo largo de la aplicacion y que 
// los componentes accedan al contexto para saber cual es el tema actual

import React, {createContext, useReducer, useEffect} from 'react'
import { ligthTheme, themeReducer, ThemeState, darkTheme } from './ThemeReducer';
import { useColorScheme, AppState, Appearance } from 'react-native';


interface ThemeContextProps {
theme:ThemeState,
setDarkTheme: ()=>void,
setLightTheme:()=>void
}

export const ThemeContext = createContext({} as ThemeContextProps)


export const ThemeProvider =({children}:any)=>{

const colorScheme = useColorScheme ()


const [theme, dispatch] = useReducer(
    themeReducer, 
    (Appearance.getColorScheme()==="dark")? darkTheme : ligthTheme)
// funcion para ios - detectar cambio de thema desde el dispositivo 
// useEffect(() => {
//  (colorScheme === "light")
//     ? setLightTheme
//     : setDarkTheme
// }, [colorScheme])

useEffect(() => {
    AppState.addEventListener("change", (status)=>{

        if (status === "active"){
            (Appearance.getColorScheme() === "light")
                ? setLightTheme
                : setDarkTheme
        }

    })
}, [])


const setDarkTheme=()=>{
    dispatch({type:"set_dark_theme" })
console.log("dark");

} 

const setLightTheme=()=>{
    dispatch({type:"set_light_theme" })
    console.log("light");
    
}

    return(
        <ThemeContext.Provider value={{theme, setDarkTheme,setLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}