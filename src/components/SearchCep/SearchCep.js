import { FaSearch } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './SearchCep.module.css';


export default function SearchCep() {
    return (
        <main className={styles.container}>
            <div>
                <form className={style.searchBox}>
                    <FaSearch color="#989898" className={style.searchIcon}/>
                    <input type="text" placeholder="Informe o CEP aqui" className={style.searchTerm} />
                    <button type="button" className={style.searchButton}>
                        Buscar
                    </button>
                </form>
            </div>
        </main>
    )
}