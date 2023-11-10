import styled from "styled-components";

export const InfoCardContainer = styled.div`
  width: 100%;
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const InfoTitle = styled.h4`
  font-weight: 300;
  font-size: 24px;
`;

export const InfoText = styled.p`
  font-weight: 100;
  font-size: 20px;
`;

export const InfoDivider = styled.hr`
  border: 0;
  height: 1px;
  background: radial-gradient(50% 50% at 50% 50%, #D24074 0%, #6518B4 100%);
`;