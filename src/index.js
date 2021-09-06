import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { darkTheme } from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
