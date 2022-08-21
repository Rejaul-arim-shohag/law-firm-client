import { PaletteColor, PaletteColorOptions } from "@mui/material"
import { CSSProperties } from "react"

declare module '@mui/material/styles' {
    interface Palette {
        custom?: PaletteColor
    }
    interface PaletteOptions {
        custom?: PaletteColorOptions
    }

}
