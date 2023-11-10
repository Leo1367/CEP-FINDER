import { Outlet } from "react-router-dom";
import FooterCep from "../components/FooterCep/FooterCep";
import HeaderCep from "../components/HeaderCep/HeaderCep";
import SearchCep from "../components/SearchCep/SearchCep";
import { Layout, MainContent } from "./styled";


export function DefaultLayout() {
    return (
        <Layout >
            <HeaderCep />
            <SearchCep />
            <MainContent>
                <Outlet />
            </MainContent>
            <FooterCep />
        </Layout>
    )
}