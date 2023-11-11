import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: ${props => props.theme.darkgray};
  margin: 1.5rem 0;
`;

export const SearchIcon = styled(FaSearch)`
  color: ${props => props.theme.lightgray};
  position: relative;
  font-size: 20px;
  left: 30px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 3px solid ${props => props.theme.purple};
  border-radius: 7px;
  border-right: none;
  outline: none;
  padding: 15px 35px;
  font-size: 20px;
  background-color: ${props => props.theme.darkblue};
  color: ${props => props.theme.lightgray};
`;

export const SearchButton = styled.button`  
  position: relative;
  background-color: ${props => props.theme.purple};
  border: 3px solid ${props => props.theme.purple};
  border-radius: 7px;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-size: 20px;
  padding: 15px 46px;
  right: 10px;
`;
