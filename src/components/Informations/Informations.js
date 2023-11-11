import InformationCard from "../informationsCard/InformationCard";
import InforBox from "../InformationsBox/InformationsBox";
import NotFoundPage from "../NotFound/NotFound";

import { FaMapMarkerAlt, FaMapSigns, FaHotel, FaPhone } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { BsMap, BsFillFileBarGraphFill, BsFillPeopleFill } from "react-icons/bs"
import { IconInformations } from "./InfomationsStyles";

export default function Informations(props) {
    const { error } = props;
    return (
        <main>
            {error ? (

                <div className="error-message">
                    <NotFoundPage error={error} />
                </div>
            ) : (
                <>
                    <InforBox>
                        <InformationCard icons={<IconInformations as={FaMapMarkerAlt}/>} title={"Cep"} result={props.cep === "" ? "Não Possui" : props.cep} />
                        <InformationCard icons={<IconInformations as={FaMapSigns}/>} title={"Bairro"} result={props.bairro === "" ? "Não Possui" : props.bairro} />
                        <InformationCard icons={<IconInformations as={FaPhone}/>} title={"DDD"} result={props.ddd === "" ? "Não Possui" : props.ddd} />
                    </InforBox>
                    <InforBox>
                        <InformationCard icons={<IconInformations as={FaHouse}/>} title={"Logradouro"} result={props.logradouro === "" ? "Não Possui" : props.logradouro} />
                        <InformationCard icons={<IconInformations as={BsMap}/>} title={"Localidade"} result={props.localidade === "" ? "Não Possui" : props.localidade} />
                        <InformationCard icons={<IconInformations as={BsFillFileBarGraphFill}/>} title={"Ibge"} result={props.ibge === "" ? "Não Possui" : props.ibge} />
                    </InforBox>
                    <InforBox>
                        <InformationCard icons={<IconInformations as={BsFillPeopleFill}/>} title={"Complemento"} result={props.complemento === "" ? "Não Possui" : props.complemento} />
                        <InformationCard icons={<IconInformations as={FaHotel}/>} title={"UF"} result={props.uf === "" ? "Não Possui" : props.uf} />
                        <InformationCard icons={<IconInformations as={IoBook}/>} title={"Gia"} result={props.gia === "" ? "Não Possui" : props.gia} />
                    </InforBox>
                </>
            )}
        </main >
    )
}