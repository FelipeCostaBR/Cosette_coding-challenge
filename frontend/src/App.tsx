import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './provider';
import { Routes } from './routes';

import GlobalStyle from './styles/global';

export const App: React.FC = () => (
    <div className="App">
        <Router>
            <AppProvider>
                <Routes />
            </AppProvider>
            <GlobalStyle />
        </Router>
    </div>
);
