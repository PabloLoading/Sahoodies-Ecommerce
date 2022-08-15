import { Link } from "react-router-dom"
import './OrderList.css'

const OrderList=({orders})=>{
    return (
        <ul className="order-list">
            {orders.map(order=>{
                return (
                    <Link className="link xdk" key={order.id} to={`/order/${order.id}`}>
                        <p>{order.date}</p>
                        <p className="total">{`$${order.total}`}</p>
                    </Link>
                )})
            }
        </ul>
    )
}
export default OrderList