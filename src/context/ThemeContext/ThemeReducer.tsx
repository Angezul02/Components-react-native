import { Theme } from '@react-navigation/native';

// funcion pura para ayudar a despachar acciones que cambien el tema

type ThemeAction=
|{type:"set_light_theme"}
|{type:"set_dark_theme"}

export interface ThemeState extends Theme{
    currentTheme: "ligth" | "dark"
    dividerColor: string
}

export const ligthTheme: ThemeState ={
    currentTheme: "ligth",
    dark:false,
    dividerColor:"#65648C",
    colors: {
        primary: "#2D7E9D",
        background: "white",
        card: "pink",
        text: "#65648C",
        border: "orange",
        notification: "teal",
    }
}

export const darkTheme: ThemeState ={
    currentTheme: "dark",
    dark:true,
    dividerColor:"#BAE9E6",
    colors: {
        primary: "#9F9DF0",
        background: "black",
        card: "black",
        text: "#BAE9E6",
        border: "black",
        notification: "teal",
    }
}

export const themeReducer =(state:ThemeState, action:ThemeAction): ThemeState =>{

        switch (action.type) {
            case "set_light_theme":
                return{
                    ...ligthTheme,
                }
            case "set_dark_theme":
                return{
                    ...darkTheme,
                    }
                        
            default:
                return state;
        }
}