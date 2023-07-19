import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //Puxa a extensão de rotas.
import { Navbar } from './Navbar/Navbar'; //Passando componentes do Navbar.
import {Cart} from './Pages/Cart/Cart'; //Passando Carts.
import { Shop } from './Pages/Shop/Shop';//Passando Shop.
import Products from './produtos/products';

function App() {
  return (
    <>
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
      </Router>
      <Products/>    
    </div>
    </>
  );
};

export default App;