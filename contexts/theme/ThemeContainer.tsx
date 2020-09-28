import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { customTheme } from '../../styles/themes'

export default function ThemeContainer({children}) {
    return (
        <ThemeProvider theme={customTheme}>
            <ColorModeProvider value="light">
                <CSSReset />
                {children}
            </ColorModeProvider>
        </ThemeProvider>
    )
}
