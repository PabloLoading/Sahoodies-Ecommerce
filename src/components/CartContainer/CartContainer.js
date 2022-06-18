import './CartContainer.css'
import {useContext} from 'react'
import CartContext from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem'
import OrderTemplate from '../OrderTemplate/OrderTemplate';
import {addDoc ,collection} from 'firebase/firestore'
import db from '../../services/firebase';

const CartContainer = ()=>{

    
    const value =useContext(CartContext)
    const {products,getSubtotal}=value

    let order = {
        buyer:{
            name: "Paul Eddinson",
            phone: "56672912",
            email: "peddinson@gmail.com",
            address: "55th rewine",
        },
        items: products,
        date: new Date().toString(),
        total: getSubtotal()
    }
    const makeOrder=()=>{
        let collectionRef = collection(db,'orders')
        addDoc(collectionRef,order).then(({id})=>{
            console.log(`Orden ${id} recibida correctamente`)
        })
    }
    
    return (
        <div className='cart-container'>

            <h2>Mis productos: </h2>
            <div className='cart-content'>
                <section>
                    {products.map(prod=><CartItem key={prod.id} item={prod}/>)}
                </section>
                <OrderTemplate pay={makeOrder}/>
            </div>
        </div>
    )
}

export default CartContainer