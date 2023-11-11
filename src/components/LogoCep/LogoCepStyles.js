import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

export const LogoText = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  font-weight: bold;
  color: ${props => props.theme.white};
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

export const Icon = styled(FaMapMarkerAlt)`
  font-size: 280px;
  color: ${props => props.theme.cyan};

  @media (max-width: 768px) {
    font-size: 250px;
  }
`;

export const SpanCep = styled.span`
color: ${props => props.theme.purple}
`