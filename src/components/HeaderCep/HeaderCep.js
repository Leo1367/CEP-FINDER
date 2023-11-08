import { FaMapMarkerAlt } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './HeaderCep.module.css';
import { Link, useNavigate } from "react-router-dom";
import { CepContext } from "../../context/SearchInfo";
import { useContext } from "react";

export default function HeaderCep() {
    const { setCep } = useContext(CepContext);
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        setCep('')
        navigate('/');
    };

    return (
        <header>
            <div className={styles.container}>
                <nav className={style.logo}>
                    <Link to={"/"} onClick={navigateToHomePage} style={{ color: '#fff', textDecoration: 'none' }}>
                        <h1><FaMapMarkerAlt color="#00D2DF" /> CEP <span style={{ color: "#873EFF" }}>FINDER</span></h1>
                    </Link>
                </nav>
            </div>
        </header>
    );
}