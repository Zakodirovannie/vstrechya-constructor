// src/Route.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import App from './pages/Main/App';
import PrivateRoute from "./PrivateRoute";
import ExhibitionsPage from "./pages/Exhibitions/ExhibitionsPage";
import ExhibitionCard from "./components/Exhibitions-components/ExhibitionCard/ExhibitionCard";

const RoutePath: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="" element={<PrivateRoute />} >
                    <Route path="/" element={<App />} />
                    <Route path="/me/exhibitions" element={<ExhibitionsPage user={'me'} />} />
                    <Route path='/me/exhibitions/:id' element={<ExhibitionCard />} />
                </Route>
            </Switch>
        </Router>
    );
};

export default RoutePath;
