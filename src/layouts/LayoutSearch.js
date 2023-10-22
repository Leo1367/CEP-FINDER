import React, { useState } from "react";
import FooterCep from "../components/FooterCep/FooterCep";
import HeaderCep from "../components/HeaderCep/HeaderCep";
import SearchCep from "../components/SearchCep/SearchCep";
import LogoCep from "../components/LogoCep/LogoCep";
import Informations from "../components/Informations/Informations";
import NotFound from "../components/NotFound/NotFound";

export default function LayoutSearch() {
    const [cepData, setCepData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [showInformations, setShowInformations] = useState(false); 

    const handleCepData = (data) => {
        if (data.erro) {
            setNotFound(true);
            setShowLogo(false);
            setShowInformations(false); 
        } else {
            setCepData(data);
            setNotFound(false);
            setShowLogo(false);
            setShowInformations(true); 
        }
    }

    const handleHeaderClick = () => {
        setShowLogo(true);
        setShowInformations(false);
    }

    return (
        <div>
            <HeaderCep onClick={handleHeaderClick} />
            <SearchCep onCepData={handleCepData} />
            {showLogo ? <LogoCep /> : null}
            {showInformations && !notFound ? <Informations {...cepData} /> : null}
            {notFound ? <NotFound /> : null}
            <FooterCep />
        </div>
    )
}
