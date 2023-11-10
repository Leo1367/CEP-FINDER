import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ResultSearch } from './pages/ResultSearch';
import { DefaultLayout } from './default';

export function CepRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/result" element={<ResultSearch />} />
                </Route>
            </Routes>
        </Router>
    )
}