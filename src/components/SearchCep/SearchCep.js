import { FaSearch } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './SearchCep.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CepContext } from '../../context/SearchInfo';

export default function SearchCep() {
    const { cep, setCep } = useContext(CepContext);
    const navigate = useNavigate();

    const handleCepChange = (e) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/[^\d]/g, '');
        inputValue.length <= 5 ? inputValue = inputValue.replace(/^(\d{5})/, '$1') : inputValue = inputValue.replace(/^(\d{5})(\d{0,3})/, '$1-$2');
        setCep(inputValue);
    };

    const fetchCepInfo = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const responseData = response.data;

            if (responseData.erro) {
                navigate('/result', { state: { error: 'CEP NÃO \nENCONTRADO' } });
            } else {
                navigate('/result', { state: { props: responseData } });
            }
        } catch (error) {
            console.log('Erro ao encontrar o CEP: ', error);
            navigate('/result', { state: { error: 'CEP INVÁLIDO \n VERIFIQUE O CEP DIGITADO' } });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCepInfo();
    };

    return (
        <main className={styles.container}>
            <div>
                <form className={style.searchBox} onSubmit={handleSubmit}>
                    <FaSearch color="#989898" className={style.searchIcon} />
                    <input
                        type="text"
                        placeholder="Informe o CEP aqui"
                        className={style.searchTerm}
                        value={cep}
                        onChange={handleCepChange}
                        maxLength="9"
                    />
                    <button type="submit" className={style.searchButton}>
                        Buscar
                    </button>
                </form>
            </div>
        </main>
    );
}
