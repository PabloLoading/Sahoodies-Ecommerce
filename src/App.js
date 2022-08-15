import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './routes/AppRouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <ToastContainer />
            <AppRouter/>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
