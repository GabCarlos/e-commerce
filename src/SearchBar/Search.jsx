import React, {useState} from "react";
import {BiSearchAlt} from 'react-icons/bi' //Passando o icone do react icons
import './Search.css';

//Passando o intem que irá fazer busca
export function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return(
    <form>

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