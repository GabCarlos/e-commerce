import { useState, useEffect } from 'react';
import React from "react";
import './products.css'
import fetchProducts from '../api/fetchProducts';
import ProductCard from '../Card/ProductCard';


//criando a função que passa os itens para o sistema:
function Products() {

//const dos itens:
  const [conteudo, setConteudo] = useState([]);

//função que atualiza os itens que a gente que passar na tela principal
  useEffect(() => {
    
    fetchProducts('iphone').then((response)=> {
      setConteudo(response);
    });

  }, []);

  return(

//Função que retorna os produtos a tela principal:
    <section className="container">
      {
        conteudo.map((conteudo) => <ProductCard key={conteudo.id} data={conteudo}/>)
      }
    </section>

  );
};

export default Products;