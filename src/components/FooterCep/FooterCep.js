import { FaRegCopyright } from "react-icons/fa";
import { CopyrightText, FooterContainer } from "./FooterStyles";


export default function FooterCep() {
  return (
    <FooterContainer>
      <CopyrightText>
        <FaRegCopyright color="#FFFFFF" /> 2023 - Leonardo e Edilando
      </CopyrightText>
    </FooterContainer>
  )
}