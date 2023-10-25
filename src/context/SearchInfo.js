import React, { createContext, useState } from "react";

export const CepContext = createContext();

export default function SearchInfo({ children }) {
    const [cep, setCep] = useState('');


    return (
        <CepContext.Provider value={{ cep, setCep }}>
            {children}
        </CepContext.Provider>
    );
}