import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
display: flex;
justify-content: center;
color: ${props => props.theme.white};
font-size: 20px;
`;

export const IconFooter = styled(FaRegCopyright)`
color: ${props => props.theme.white};
`
