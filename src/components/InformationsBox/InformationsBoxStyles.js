import styled from "styled-components";

export const InfoBox = styled.div`
color: #ffffff;
display: flex;
align-items: center;

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2rem 0;
}
`;