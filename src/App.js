import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//     <ItemListContainer greeting='Querido tutor que tengas un excelente dia <3'/> 
//<p className='temp'>a</p>
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
