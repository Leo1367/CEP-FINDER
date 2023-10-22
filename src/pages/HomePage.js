import React from 'react';
import HeaderCep from '../components/HeaderCep/HeaderCep';
import SearchCep from '../components/SearchCep/SearchCep';
import LogoCep from '../components/LogoCep/LogoCep';
import FooterCep from '../components/FooterCep/FooterCep';

export default function HomePage(){
  return (
    <div>
      <HeaderCep />
      <SearchCep />
      <LogoCep />
      <FooterCep />
    </div>
  );
}
