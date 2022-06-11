import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <div className='top-space'></div>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h2>Lo sentimos, la pagina que buscas no existe</h2>} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
