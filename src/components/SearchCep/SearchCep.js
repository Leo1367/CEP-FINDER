import style from './SearchCep.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CepContext } from '../../context/SearchInfo';
import { SearchButton, SearchForm, SearchIcon, SearchInput, SearchInputContainer } from "./SearchCepStyles";

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
        <SearchInputContainer>
            <SearchForm onSubmit={handleSubmit}>
                <SearchIcon />
                <SearchInput
                    type="text"
                    placeholder="Informe o CEP aqui"
                    className={style.searchTerm}
                    value={cep}
                    onChange={handleCepChange}
                    maxLength="9"
                />
                <SearchButton type="submit" >
                    Buscar
                </SearchButton>
            </SearchForm>
        </SearchInputContainer>
    );
}
