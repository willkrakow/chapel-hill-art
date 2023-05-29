import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string
            white: string
            black: string
            background: string;
            grey: string;
            transparent: string;
        },
        fonts: {
            body: string;
            heading: string;
        },
        fontSizes: {
            body: string;
            h5: string;
            h4: string;
            h3: string;
            h2: string;
            h1: string;
        },
        shadows: {
            small: string;
            medium: string;
            large: string;
            hover: string;
        },
    }
}