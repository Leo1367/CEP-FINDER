import { FaSearch } from "react-icons/fa";

export default function SearchCep() {
    return (
        <div>
            <div>
                <FaSearch />
                <input type="text" placeholder="Informe o CEP aqui" />
                <button type="button">
                    Buscar
                </button>
            </div>
        </div>
    )
}