import InformationCard from "./InformationCard";
import InforBox from "./InformationsBox";

import { FaMapMarkerAlt, FaMapSigns, FaHotel, FaPhone } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { BsMap, BsFillFileBarGraphFill, BsFillPeopleFill } from "react-icons/bs"

export default function Informations(props) {
    return (
        <main>
            <InforBox>
                <InformationCard icons={<FaMapMarkerAlt color="#00D2DF" size={130} />} title={"Cep"} result={props.cep === "" ? "Não Possui" : props.cep} />
                <InformationCard icons={<FaMapSigns color="#00D2DF" size={130} />} title={"Bairro"} result={props.bairro === "" ? "Não Possui" : props.bairro} />
                <InformationCard icons={<FaPhone color="#00D2DF" size={130} />} title={"DDD"} result={props.ddd === "" ? "Não Possui" : props.ddd} />
            </InforBox>
            <InforBox>
                <InformationCard icons={<FaHouse color="#00D2DF" size={130} />} title={"Logradouro"} result={props.logradouro === "" ? "Não Possui" : props.logradouro} />
                <InformationCard icons={<BsMap color="#00D2DF" size={130} />} title={"Localidade"} result={props.localidade === "" ? "Não Possui" : props.localidade} />
                <InformationCard icons={<BsFillFileBarGraphFill color="#00D2DF" size={130} />} title={"Ibge"} result={props.ibge === "" ? "Não Possui" : props.ibge} />
            </InforBox>
            <InforBox>
                <InformationCard icons={<BsFillPeopleFill color="#00D2DF" size={130} />} title={"Complemento"} result={props.complemento === "" ? "Não Possui" : props.complemento} />
                <InformationCard icons={<FaHotel color="#00D2DF" size={130} />} title={"UF"} result={props.uf === "" ? "Não Possui" : props.uf} />
                <InformationCard icons={<IoBook color="#00D2DF" size={130} />} title={"Gia"} result={props.gia === "" ? "Não Possui" : props.gia} />
            </InforBox>
        </main >
    )
}