import React from 'react';
import { useLocation } from 'react-router-dom';
import Informations from '../components/Informations/Informations';

export function ResultSearch() {
    const location = useLocation();
    const cepData = location.state?.props;
    const error = location.state?.error;

    return (
        <>
            {error ? (
                <Informations error={error} />
            ) : (
                <Informations {...cepData} />
            )}
        </>
    );
}
    