import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import AppRouter from './routes/AppRouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <div className='top-space'></div>
          <ToastContainer/>
          <AppRouter/>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
