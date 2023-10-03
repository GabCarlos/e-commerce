import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; //Puxa a extensão de rotas.
import Products from './Components/produtos/products';//Passando os componentes do Products.
import Provider from './context/Provider';//Passando os componentes do Provider.
import { Navbar } from './Components/Navbar/Navbar';//Passando os componentes do Navbar.
import { Shop } from './Shop/Shop';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Provider>
      <BrowserRouter>
      <Shop/>
       <Products/>    
       <Routes>
        <Route path='Navbar' element={<Navbar/>}/>
        <Route path='Cart' element={<Cart/>}/>
       </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;