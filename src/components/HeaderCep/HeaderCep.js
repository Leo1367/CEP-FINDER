import { FaMapMarkerAlt } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './HeaderCep.module.css';

export default function HeaderCep({ onClick }) {
    return (
        <header>
            <div className={styles.container}>
                <nav className={style.logo}>
                    <h1 onClick={onClick}><FaMapMarkerAlt color="#00D2DF" /> CEP <span>FINDER</span></h1>
                </nav>
            </div>
        </header>
    );
}
