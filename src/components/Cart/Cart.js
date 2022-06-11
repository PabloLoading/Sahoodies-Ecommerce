import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import CartContainer from "../CartContainer/CartContainer"
import CartEmpty from "../CartEmpty/CartEmpty"

const Cart =()=>{

    let {getQuantity}=useContext(CartContext)
    

    return (
        <div>
            {getQuantity()>0 ? <CartContainer/> : <CartEmpty/>}
        </div>
    )
}
export default Cart