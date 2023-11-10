import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const MainContent = styled.main`
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;