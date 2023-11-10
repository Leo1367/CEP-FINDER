import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: #161B22;
  margin: 2rem 0;
`;

export const SearchIcon = styled(FaSearch)`
  color: #989898;
  font-size: 20px;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 3px solid #873EFF;
  border-radius: 7px;
  border-right: none;
  outline: none;
  padding: 15px 35px;
  font-size: 20px;
  background-color: #0D1117;
  color: #989898;
`;

export const SearchButton = styled.button`
  background-color: #873EFF;
  border: 3px solid #873EFF;
  border-radius: 7px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  padding: 15px 46px;
  margin-left: 10px;
`;
