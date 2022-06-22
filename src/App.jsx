import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemsListContainer />} />
        <Route path='/category/:categoria' element={<ItemsListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
