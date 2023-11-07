import { useEffect, useContext } from 'react';
import React from "react";
import './products.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../Card/ProductCard';
import AppContext from '../../context/appcontext';
import Loading from '../Loading/Loading';


//criando a função que passa os itens para o sistema:
function Products() {

//Desistruturando as informações do Provider:
const {conteudo, setConteudo, loading, setLoading} = useContext(AppContext);

//função que atualiza os itens que a gente que passar na tela principal
  useEffect(() => {
    
    fetchProducts('').then((response)=> {
      setConteudo(response);
      setLoading(false);  
    });

  }, [setConteudo, setLoading]);

  return(

//Função que retorna os produtos a tela principal ou a tela de loading:
    (loading && <Loading/>) || ( <section className="container">
      {conteudo.map((conteudo) => <ProductCard key={conteudo.id} data={conteudo}/>)}
    </section>)

  );
};

export default Products;