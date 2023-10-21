import FooterCep from "../components/FooterCep/FooterCep";
import HeaderCep from "../components/HeaderCep/HeaderCep";
import Informations from "../components/Informations/Informations";
import SearchCep from "../components/SearchCep/SearchCep";


export default function LayoutSearch() {
    return (
        <div>
            <HeaderCep/>
            <SearchCep />
            <Informations />
            <FooterCep />
        </div>
    )
}