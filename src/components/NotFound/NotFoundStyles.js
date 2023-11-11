import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  font-size: 32px;
  font-weight: bold;
  height: 45vh;
  text-align: center;
  white-space: pre;
`;