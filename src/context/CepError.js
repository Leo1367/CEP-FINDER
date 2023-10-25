import { createContext, useState } from "react";

export const ErrorContext = createContext();

export default function CepError({ children }) {
    const [error, setError] = useState("");

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    );
}