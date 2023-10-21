import { FaMapMarkerAlt, FaMapSigns, FaHotel } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { TbBalloon } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import { BsMap, BsFillFileBarGraphFill, BsFillPeopleFill } from "react-icons/bs"
import InformationCard from "./InformationCard";
import InforBox from "./InformationsBox";

export default function Informations() {
    return (
        <main>
            <InforBox>
                <InformationCard icons={<FaMapMarkerAlt color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<FaMapSigns color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<TbBalloon color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
            </InforBox>
            <InforBox>
                <InformationCard icons={<FaHouse color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<BsMap color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<BsFillFileBarGraphFill color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
            </InforBox>
            <InforBox>
                <InformationCard icons={<BsFillPeopleFill color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<FaHotel color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
                <InformationCard icons={<IoBook color="#00D2DF" size={150} />} title={"CEP"} result={"06700-208"} />
            </InforBox>
        </main >
    )
}