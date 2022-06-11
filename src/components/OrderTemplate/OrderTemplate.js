
import Recipt from '../Recipt/Recipt'
import './OrderTemplate.css'

const OrderTemplate=()=>{
    return(
        <section className='order-template'>
            <h2>Tu carrito</h2>
            <Recipt />
            <button className='pay' onClick={()=>console.log("Pague")}>Hacer mi Pago</button>
            {/*
            <p>promociones</p>
            <p>texto extra</p>
            */}
        </section>
    )
}
export default OrderTemplate