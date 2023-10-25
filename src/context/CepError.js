import { createContext, useState } from "react";

export const ErrorContext = createContext();

export default function CepError({ children }) {
    const [error, setError] = useState("");

    const updateErrorMessage = (message) => {
        setError(message);
    };

    return (
        <ErrorContext.Provider value={{ error, updateErrorMessage }}>
            {children}
        </ErrorContext.Provider>
    );
}