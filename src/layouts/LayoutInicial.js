import FooterCep from "../components/FooterCep/FooterCep";
import HeaderCep from "../components/HeaderCep/HeaderCep";
import LogoCep from "../components/LogoCep/LogoCep";
import SearchCep from "../components/SearchCep/SearchCep";


export default function LayoutInicial() {
    return (
        <div>
            <HeaderCep />
            <SearchCep />
            <LogoCep />
            <FooterCep />
        </div>
    )
}