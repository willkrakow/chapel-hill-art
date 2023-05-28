import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string
            white: string
            black: string
            background: string;
            grey: string;
        }
    }
}