import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fechInfos = async (cep) => {
    return await axios.get(`${API_URL}/${cep}/json/`);
}