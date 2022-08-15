import CartItem from "../CartItem/CartItem"

const CartItemList = (props)=>{
    let sale=()=>false
    if(props.saleFun) sale=props.saleFun
    return (
        <div className="cart-item-list">
            {props.products.map(prod=><CartItem sale={sale(prod)} numberOrdered={props.static? prod.quantity : false} {...props} path={`/item/${prod.id}`} key={prod.id} item={prod}/>)}
        </div>
    )
}
export default CartItemList