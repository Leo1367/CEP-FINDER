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
  const navigate = useNavigate(); // Use useNavigate ao invés de useHistory

  const handleCepData = (data) => {
    if (data.erro) {
      setNotFound(true);
      setShowLogo(false);
      navigate("/notfound"); // Redireciona para a página de erro
    } else {
      setCepData(data);
      setNotFound(false);
      setShowLogo(false);
      navigate("/search"); // Redireciona para a página de informações
    }
  }

  return (
    <div>
      <Link to="/"> {/* Use o Link para voltar à página inicial */}
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