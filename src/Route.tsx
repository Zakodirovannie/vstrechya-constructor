// src/Route.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import App from './pages/Main/App';
import Auth from './pages/Login/Login';

const RoutePath: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Auth />} />
            </Switch>
        </Router>
    );
};

export default RoutePath;
