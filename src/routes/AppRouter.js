
import { Route,Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Register from "../components/Register/Register"
import Login from "../components/Login.js/Login"
import LogedRoutes from "./components/LogedRoutes"
import useAuth from "../Context/AuthContext"
import NotLogedRoutes from "./components/NotLogedRoutes"
import AccountContainer from "../components/AccountContainer/AccountContainer"
import ChangePass from "../components/ChangePass/ChangePass"
import CartContainer from "../components/CartContainer/CartContainer"
import BackHome from "../components/BackHome/BackHome"
import OrderDetailContainer from "../components/OrderDetailContainer/OrderDetailContainer"


const AppRouter = ()=>{
    const {currentUser} = useAuth()

    return (
        <Routes>
            <Route element={<LogedRoutes user={currentUser} redirectPath='/login'/>}>
                <Route path="/account" element={<AccountContainer/>}/>
                <Route path='/change-password' element={<ChangePass/>}/>
                <Route path='/order/:orderId' element={<OrderDetailContainer/>}/>
            </Route>
            <Route element={<NotLogedRoutes user={currentUser}/>}>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Route>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<BackHome/>} />
        </Routes>
    )
}
export default AppRouter