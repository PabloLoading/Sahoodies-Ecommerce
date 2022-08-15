import './CartContainer.css'
import OrderTemplate from '../OrderTemplate/OrderTemplate';
import { makeOrder } from '../../services/firebase/firestore/orders';
import useUser from '../../hooks/useUser';
import useCart from '../../Context/CartContext';
import CartItemList from '../CartItemList/CarItemList';
import BackHome from '../BackHome/BackHome';
import { toast } from 'react-toastify';
import { handleError } from '../../helpers/errors';
import {Navigate} from 'react-router-dom';
import { useState } from 'react';
import { getTime } from '../../helpers/date';


const CartContainer = ()=>{
    
    const [redirect,setRedirect]=useState(false)

    const {products,getSubtotal,clearCart,modifyQuantity,getItemQuantity,deleteItem} =useCart()
    const {dbUser,currentUser,error,isLoading} = useUser()

    if(error)console.log(error)
    
    if(currentUser && isLoading){
        return <p>Loading...</p>
    }
    if(products.length==0){
        return <BackHome msg='Your cart is empty'/>
    }
    if(redirect){
        return <Navigate to='/login' />
    }
    
    const handleClick=()=>{
        const {address,name,phone,id} = dbUser
        let order = {
            buyer:{address,name,phone,id},
            items: products,
            date: getTime(),
            total: getSubtotal()
        }
        makeOrder(products,currentUser,order,dbUser)
        .then(()=>{
            toast.success('Order sent succesfully')
            clearCart()
        })
        .catch(e=>handleError(e))
    }
    const sale=item=>item.categoryId.includes('sale')

    return (
        <div className='cart-container fitted'>
            <h2>My Cart </h2>
            <div className='cart-content'>
                <CartItemList deleteItem={deleteItem} saleFun={sale} modifyQuantity={modifyQuantity} getItemQuantity={getItemQuantity} products={products}/>
                <OrderTemplate products={products} subtotal={getSubtotal()} makeOrder={currentUser? handleClick : ()=>setRedirect(true)} clear={clearCart}/>
            </div>
        </div>
    )
}

export default CartContainer