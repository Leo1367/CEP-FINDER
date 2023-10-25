import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultSearch from './pages/ResultSearch';
import SearchInfo from './context/SearchInfo';
import CepError from './context/CepError';


export default function App() {
    return (
        <Router>
            <CepError>
                <SearchInfo>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/result" element={<ResultSearch />} />
                    </Routes>
                </SearchInfo>
            </CepError>
        </Router>
    );
}