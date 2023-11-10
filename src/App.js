import React from 'react';
import SearchInfo from './context/SearchInfo';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components';
import { CepRouter } from './Router.js';


export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
                <SearchInfo>
                        <CepRouter />
                </SearchInfo>
            <GlobalStyle />
        </ThemeProvider>
    );
}