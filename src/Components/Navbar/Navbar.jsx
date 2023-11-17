import './Navbar.css';
import React, {useState, useContext} from 'react';
import AppContext from '../../context/appcontext';
import fetchProducts from '../../api/fetchProducts';
import { Link } from 'react-router-dom';

const Navbar = () => {

//Dando as funções para a barra de busca:
const [searchValue, setSearchValue] = useState('');

const handleSearch = async (event) => {
  event.preventDefault();
  setLoading(true);

const produt = await fetchProducts(searchValue);
  setConteudo(produt);
  setLoading(false);
  setSearchValue('');
};

//Consumindo os valores do Provider, podendo desistruturar qualquer informação:
const {setConteudo, setLoading} = useContext(AppContext);


return (
 <div className='Navbar'>
  <Link to='/Cart'><button className='cart'>Cart</button></Link>
  <Link to='/'><button className='pag_p'>Pagina Principal</button></Link>
   
  <form className='search-bar' onSubmit={handleSearch}>
   <input
     type='search'
     placeholder='Search products'
     value={searchValue}
     className='inputSearch'
     onChange={({target}) => setSearchValue(target.value)} 
    required
   /> 
 
   <button type='submit' className='buttonSearch'>?</button> 

  </form>
</div>
  );
};

export default Navbar;