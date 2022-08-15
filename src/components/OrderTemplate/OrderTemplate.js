
import Recipt from '../Recipt/Recipt'
import './OrderTemplate.css'

const OrderTemplate=({clear,makeOrder,products,subtotal})=>{
    return(
        <section className='order-template'>
            <Recipt products={products} subtotal={subtotal}/>
            <div className='order-buttons'>
                <button className='pay-btn' onClick={()=>clear()}>Clear Cart</button>
                <button className='pay-btn' onClick={()=>makeOrder()}>Make Order</button>
            </div>
        </section>
    )
}
export default OrderTemplate