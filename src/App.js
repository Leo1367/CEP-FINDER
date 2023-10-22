import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultSearch from './pages/ResultSearch';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/result" element={<ResultSearch />} />
            </Routes>
        </Router>
    );
}