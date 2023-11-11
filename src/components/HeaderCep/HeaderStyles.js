import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.nav`
font-size: 40px;
font-weight: bold;
color: ${props => props.theme.white};
cursor: pointer;

@media (max-width: 768px) {
  font-size: 24px;
}
`;

export const IconHeader = styled(FaMapMarkerAlt)`
color: ${props => props.theme.cyan};
`
export const SpanHeader = styled.span`
color: ${props => props.theme.purple}
`
export const LinkStyled = styled(Link)`
  color: ${props => props.theme.white}; 
  text-decoration: none; 
`