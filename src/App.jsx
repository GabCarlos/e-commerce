import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //Puxa a extensão de rotas.
import Cart from './Components/Carrinho/Cart'; //Passando Carts.
import { Shop } from './Shop/Shop';//Passando Shop.
import Products from './Components/produtos/products';//Passando os componentes do Products.
import Provider from './context/Provider';//Passando os componentes do Provider.
import { Navbar } from './Components/Navbar/Navbar';//Passando os componentes do Navbar.

function App() {
  return (
    <Provider>
     <Router>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Shop/>}/>
         <Route path='/cart'element={<Cart/>}/>
       </Routes>
     </Router>
     <Products/>    
    </Provider>
  );
};

export default App;
