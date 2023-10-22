import { FaMapMarkerAlt } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './HeaderCep.module.css';
import { useNavigate } from "react-router-dom"; 

export default function HeaderCep() {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/'); 
    };

    return (
        <header>
            <div className={styles.container}>
                <nav className={style.logo}>
                    <a onClick={navigateToHomePage} style={{ cursor: 'pointer' }}>
                        <h1><FaMapMarkerAlt color="#00D2DF" /> CEP <span>FINDER</span></h1>
                    </a>
                </nav>
            </div>
        </header>
    );
}