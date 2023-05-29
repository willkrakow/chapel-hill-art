import { Theme } from "@emotion/react"

export const theme: Theme = {
    colors: {
        black: '#000',
        primary: '#333',
        background: '#f5f5f5',
        white: '#fff',
        grey: '#ccc',
        transparent: 'rgba(245,245,245,0.2)',
    },
    fonts: {
        body: `'Bodoni Moda', serif`,
        heading: `'Space Grotesk', sans-serif`,
    },
    fontSizes: {
        body: '1rem',
        h5: '1rem',
        h4: '1.625rem',
        h3: '2.125rem',
        h2: '2.5rem',
        h1: '3rem',
    },
    shadows: {
        small: '0 0 4px rgba(0,0,0,0.4)',
        medium: '0 0 6px rgba(0,0,0,0.4)',
        large: '0 0 8px rgba(0,0,0,0.4)',
        hover: '0 0 10px rgba(0,0,0,0.4)',
    },
}

export const darkTheme: Theme = {
    colors: {
        white: '#000',
        primary: '#f5f5f5',
        background: '#1a1c1c',
        black: '#f4f8f8',
        grey: '#c1c9c9',
        transparent: '#6769696b',
    },
    fonts: {
        body: `'Bodoni Moda', serif`,
        heading: `'Space Grotesk', sans-serif`,
    },
    fontSizes: {
        body: '1rem',
        h5: '1rem',
        h4: '1.625rem',
        h3: '2.125rem',
        h2: '2.5rem',
        h1: '3rem',
    },
    shadows: {
        small: '0 0 4px rgba(0,0,0,0.4)',
        medium: '0 0 6px rgba(0,0,0,0.4)',
        large: '0 0 12px 14px rgba(0,0,0,0.4)',
        hover: '0 0 10px rgba(0,0,0,0.4)',
    },
}