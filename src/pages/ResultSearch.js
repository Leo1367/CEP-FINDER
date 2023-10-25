import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderCep from '../components/HeaderCep/HeaderCep';
import SearchCep from '../components/SearchCep/SearchCep';
import Informations from '../components/Informations/Informations';
import NotFound from '../components/NotFound/NotFound';
import FooterCep from '../components/FooterCep/FooterCep';

export default function ResultSearch() {
    const location = useLocation();
    const cepData = location.state?.props;

    return (
        < >
            <HeaderCep />
            <SearchCep />
            {cepData && cepData.erro ? (
                <NotFound />
            ) : (
                <Informations {...cepData} />
            )}
            <FooterCep />
        </ >
    );
}
