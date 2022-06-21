import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import products from './utilities/products';
import Item from './components/Item';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemsListContainer />} />
        <Route path='/category/:categoria' element={<ItemsListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
