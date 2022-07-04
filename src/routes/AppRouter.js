
import { Routes,Route } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Cart from "../components/Cart/Cart"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import FinishOrder from "../components/FinishOrder/FinishOrder"

const AppRouter = ()=>{
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/finishOrder' element={<FinishOrder/>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/search' element={<h2>Proximamente...</h2>}/>
            <Route path='/account' element={<h2>Proximamente...</h2>}/>
            <Route path='*' element={<h2>Lo sentimos, la pagina que buscas no existe</h2>} />
        </Routes>
    )
}
export default AppRouter