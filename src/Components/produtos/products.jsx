import { useState, useEffect, useContext } from 'react';
import React from "react";
import './products.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../Card/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/appcontext';


//criando a função que passa os itens para o sistema:
function Products() {

//Const do Loading:
const [loading, setLoading] = useState(true);

//Desistruturando as informações do Provider:
const {conteudo, setConteudo} = useContext(AppContext);

//função que atualiza os itens que a gente que passar na tela principal
  useEffect(() => {
    
    fetchProducts('').then((response)=> {
      setConteudo(response);
      setLoading(false);
    });

  }, []);

  return(

//Função que retorna os produtos a tela principal ou a tela de loading:
    (loading && <Loading/>) || ( <section className="container">
      {conteudo.map((conteudo) => <ProductCard key={conteudo.id} data={conteudo}/>)}
    </section>)

  );
};

export default Products;