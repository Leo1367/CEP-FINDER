import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const LogoText = styled.strong`
  font-size: 120px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

export const Icon = styled(FaMapMarkerAlt)`
  font-size: 280px;

  @media (max-width: 768px) {
    font-size: 250px;
  }
`;