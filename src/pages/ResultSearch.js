import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderCep from '../components/HeaderCep/HeaderCep';
import SearchCep from '../components/SearchCep/SearchCep';
import Informations from '../components/Informations/Informations';
import FooterCep from '../components/FooterCep/FooterCep';

export default function ResultSearch() {
    const location = useLocation();
    const cepData = location.state?.props;
    const error = location.state?.error;

    return (
        <>
            <HeaderCep />
            <SearchCep />
            {error ? (
                <Informations error={error} />
            ) : (
                <Informations {...cepData} />
            )}
            <FooterCep />
        </>
    );
}
    