import React, { useEffect, useContext, useState } from 'react';
import './products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../Card/ProductCard';
import AppContext from '../../context/appcontext';
import Loading from '../Loading/Loading';

function Products() {
  const { conteudo, setConteudo, loading, setLoading } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts(searchQuery).then((response) => {
      setConteudo(response);
      setLoading(false);
    });
  }, [searchQuery, setConteudo, setLoading]);

  const handleReturnClick = () => {
    // Lógica para limpar a barra de pesquisa e os itens exibidos
    setSearchQuery('');
    setConteudo([]); // Limpar a lista de conteúdo
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="container">
          {conteudo.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}

           {conteudo.length > 0 && ( // Renderiza o botão apenas se houver itens na lista de conteúdo
            <button onClick={handleReturnClick}>Return</button>
          )}
          
        </section>
      )}
    
    </>
  );
}

export default Products;
