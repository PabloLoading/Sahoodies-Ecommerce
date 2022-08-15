import useData from "../../hooks/useData"
import { getOrder } from "../../services/firebase/firestore/orders"
import { useParams } from "react-router-dom"
import OrderDetail from "../OrderDetail/OrderDetail"
import useUser from '../../hooks/useUser'
import { validateUserInOrder } from "../../services/firebase/firestore/users"
import BackHome from "../BackHome/BackHome"


const OrderDetailContainer=()=>{

    const {orderId} = useParams()
    const {isLoading,data} = useData(getOrder,[orderId],[orderId])
    const {dbUser,isLoading:isLoading2} = useUser()

    if(isLoading || isLoading2) return <p>Loading...</p>

    if(!validateUserInOrder(dbUser,orderId)){
        return <BackHome/>
    }

    return (
        <section className="order-detail-container">
            <OrderDetail order={data}/>
        </section>
    )
}
export default OrderDetailContainer