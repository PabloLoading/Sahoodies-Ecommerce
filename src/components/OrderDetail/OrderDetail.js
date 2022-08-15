import CartItemList from "../CartItemList/CarItemList"
import Recipt from "../Recipt/Recipt"
import './OrderDetail.css'

const OrderDetail=({order})=>{
    const {name,address,phone}=order.buyer
    return (
        <section className="order-detail fitted">
            <div className="order-data">
                <div className="buyer">
                    <h3>Buyer:</h3>
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div className="recipt">
                    <Recipt products={order.items} subtotal={order.total}/>
                </div>
            </div>
            <div className="order-products">
                <CartItemList static={true} products={order.items}/>
            </div>
        </section>
    )
}
export default OrderDetail