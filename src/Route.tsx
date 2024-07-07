// src/Route.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import App from './pages/Main/App';
import Auth from './pages/Login/Login';
import PrivateRoute from "./PrivateRoute";

const RoutePath: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="" element={<PrivateRoute />} >
                    <Route path="/" element={<App />} />
                    <Route path="/me/exhibitions" element={<App />} />
                </Route>
                <Route path="/login" element={<Auth />} />
            </Switch>
        </Router>
    );
};

export default RoutePath;
