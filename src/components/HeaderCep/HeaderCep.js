import { useNavigate } from "react-router-dom";
import { CepContext } from "../../context/SearchInfo";
import { useContext } from "react";
import { IconHeader, LinkStyled, Logo, SpanHeader } from "./HeaderStyles";

export default function HeaderCep() {
    const { setCep } = useContext(CepContext);
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        setCep('')
        navigate('/');
    };

    return (
        <header>
            <Logo>
                <LinkStyled to={"/"} onClick={navigateToHomePage} >
                    <h1>
                        <IconHeader /> CEP <SpanHeader>FINDER</SpanHeader>
                    </h1>
                </LinkStyled>
            </Logo>
        </header>
    );
}