
import { Link } from 'react-router-dom'
import Recipt from '../Recipt/Recipt'
import './OrderTemplate.css'
const OrderTemplate=({clear})=>{

    return(
        <section className='order-template'>
            <h2>Tu carrito</h2>
            <Recipt />
            <button className='pay' onClick={clear}>Borrar carrito</button>
            <Link to='/finishOrder'>
                <button className='pay' >Hacer mi Pago</button>
            </Link>
            {/*
            <p>promociones</p>
            <p>texto extra</p>
            */}
        </section>
    )
}
export default OrderTemplate