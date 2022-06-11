import './Recipt.css'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react'

const Recipt = ()=>{

    let value = useContext(CartContext)
    let products = value.products
    let subtotal= value.getSubtotal()


    const GetLines=()=>{
        return products.map((prod)=>{
            return (
                <div className='detail-line' key={prod.id}>
                    <p className='name'>{prod.name}: </p>
                    <p className='cost'>{prod.price}*{prod.quantity} = {(prod.price*prod.quantity).toFixed(2)} USD</p>
                </div>
            )
        })
    }

    return (
        <div className='recipt'>
            <GetLines/>
            <div className='subtotal'>
                <p>Subtotal: {subtotal} USD</p>
            </div>
        </div>
    )
}
export default Recipt