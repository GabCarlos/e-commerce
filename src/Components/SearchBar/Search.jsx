import React, {useState, useContext} from "react";
import {BiSearchAlt} from 'react-icons/bi' //Passando o icone do react icons
import './Search.css';
import AppContext from "../../context/appcontext";
import fetchProducts from '../../api/fetchProducts';

//Passando o item que irá fazer busca:
export function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

//Consumindo os valores do Provider, podendo desistruturar qualquer informação:
const {setConteudo} = useContext(AppContext)

//Dando as funções para a barra de busca:
const handleSearch = async (event) => {
  event.preventDefault(); // Corrigido o nome da função
  const produt = await fetchProducts(searchValue);
  setConteudo(produt);
  setSearchValue('');
};



  return(
    
    <form className="search-bar" onSubmit={handleSearch}>
      <input
      type="search"
      placeholder="Search products"
      value={searchValue}
      className="inputSearch"
      onChange={({target}) => setSearchValue(target.value)}
      required
      /> 
      
      <button type='submit' className='buttonSearch'>
       <BiSearchAlt/>
      </button> 

    </form>
  );
};