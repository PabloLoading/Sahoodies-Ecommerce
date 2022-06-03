import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <div className='top-space'></div>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<h2>Carrito de compras:</h2>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h2>Lo sentimos, la pagina que buscas no existe.</h2>} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
