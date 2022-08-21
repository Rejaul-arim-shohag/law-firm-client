import { CSSProperties } from "react"

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            primary: string,
            secondary: string,
            light: string,
            dark: string,
            white: string
        }
    }
    interface ThemeOptions {
        custom: {
            primary: CSSProperties['color'],
            secondary: CSSProperties['color'],
            light: CSSProperties['color'],
            dark: CSSProperties['color'],
            white: CSSProperties['color']
        }

    }
}
