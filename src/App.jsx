import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartContext } from './CartContext';
import Tracking from './components/Tracking';

function App() {
  return (
    <BrowserRouter>
    <CartContext>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemsListContainer />} />
        <Route path='/category/:categoria' element={<ItemsListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:categoria/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Carrito/>} />
        <Route path='/tracking' element={<Tracking/>} />
      </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
