import { FaMapMarkerAlt } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './HeaderCep.module.css';
import { useNavigate } from "react-router-dom";
import { CepContext } from "../../context/SearchInfo";
import { useContext } from "react";

export default function HeaderCep() {
    const { cep, setCep } = useContext(CepContext);
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        setCep('')
        navigate('/');
    };

    return (
        <header>
            <div className={styles.container}>
                <nav className={style.logo}>
                    <a onClick={navigateToHomePage} style={{ cursor: 'pointer' }}>
                        <h1><FaMapMarkerAlt color="#00D2DF" /> CEP <span style={{ color: "#873EFF" }}>FINDER</span></h1>
                    </a>
                </nav>
            </div>
        </header>
    );
}