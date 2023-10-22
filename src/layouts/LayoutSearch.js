import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importe useNavigate
import HeaderCep from "../components/HeaderCep/HeaderCep";
import SearchCep from "../components/SearchCep/SearchCep";
import LogoCep from "../components/LogoCep/LogoCep";
import Informations from "../components/Informations/Informations";
import NotFound from "../components/NotFound/NotFound";
import FooterCep from "../components/FooterCep/FooterCep";

const LayoutSearch = () => {
  const [cepData, setCepData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate(); 

  const handleCepData = (data) => {
    if (data.erro) {
      setNotFound(true);
      setShowLogo(false);
      navigate("/notfound"); 
    } else {
      setCepData(data);
      setNotFound(false);
      setShowLogo(false);
      navigate("/search"); 
    }
  }

  return (
    <div>
      <Link to="/"> 
        <HeaderCep />
      </Link>
      <SearchCep onCepData={handleCepData} />
      {showLogo ? <LogoCep /> : null}
      {cepData && !notFound ? <Informations {...cepData} /> : null}
      {notFound ? <NotFound /> : null}
      <FooterCep />
    </div>
  );
};

export default LayoutSearch;