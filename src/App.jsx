import {BrowserRouter, Routes, Route} from 'react-router-dom'; //Puxa a extensão de rotas.
import Products from './Components/produtos/products';//Passando os componentes do Products.
import Provider from './context/Provider';//Passando os componentes do Provider.
import Shop from './Shop/Shop';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart'
import './App.css'


function App() {
  return (
      <BrowserRouter>
        <Provider>
         <Products/>
          <Routes>
           <Route path="/" element={<Shop/>}/>
           <Route path="/Navbar" element={<Navbar/>}/>
           <Route path="/Cart" element={<Cart/>}/>
          </Routes>
       </Provider> 
      </BrowserRouter>

  );
};

export default App;