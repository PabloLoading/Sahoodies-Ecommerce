import {Formik,Form,Field} from 'formik'
import { Link } from 'react-router-dom'
import './FinishOrder.css'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { commitBatch, getBatch, getProductsInIds, makeOrder, updateBatch } from '../../services/firebase/firestore'
import { toast } from 'react-toastify'
import CartEmpty from '../CartEmpty/CartEmpty'

const FinishOrder = () =>{

    
    const {products,getSubtotal,clearCart}=useContext(CartContext)
    
    if(products.length==0){
        return <CartEmpty/>
    }


    let batch=getBatch()
    
    let lookAllStocked = async ()=>{
        let outStocked=[]
        const ids=products.map(prod=>prod.id)
        let dbItems= await getProductsInIds(ids)
        console.log(dbItems)
        for(let dbItem of dbItems){
            let prodQuant=products.find(prod=>prod.id==dbItem.id)?.quantity || 0
            
            if(dbItem.data().stock>=prodQuant){
                let newStock=dbItem.data().stock - prodQuant
                updateBatch(batch,dbItem.ref,{stock: newStock})
            }
            else{
                outStocked.push(dbItem)
            }
        }
        return outStocked
    }

    return (
        <div className='finish-order'>
            <div className='finish-order-main'>
                <h2>Finish Order</h2>
                <Formik


                onSubmit={async({name,email,emailConfirm,phone,address},{setSubmitting,resetForm})=>{

                    if(email!=emailConfirm){
                        toast.warn('Emails dont match')
                        return
                    }

                    let order = {
                        buyer:{
                            name,
                            email,
                            phone,
                            address},
                        items: products,
                        date: new Date().toString(),
                        total: getSubtotal()
                    }
                    let outStocked=await lookAllStocked()
                    console.log(outStocked)
                    if(outStocked.length==0){
                        let doOrder=makeOrder(order)
                        .then((dbObj)=>{
                            toast.success(`Order ${dbObj.id} sent`)
                            resetForm()
                            commitBatch(batch)
                            clearCart()
                        })
                        .catch(e=>console.log(e))
                        .finally(setSubmitting(false))
                        
                        
                        toast.promise(doOrder,{
                            pending:'Order is loading',
                            success:'Order sent correctly',
                            error: 'There was a problem'
                        })
                        
                    }
                    else{
                        toast.error('No se pudo completar la orden, productos sin stock')
                        for(let item of outStocked){
                            toast.info(`${item.data().name}. Stock disponible: ${item.data().stock}`)
                        }
                        setSubmitting(false)
                    }
                }}

                initialValues={{
                    name: '',
                    email: '',
                    emailConfirm:'',
                    phone: '',
                    address: ''}}
                
                >
                    
                {({ isSubmitting})=>(

                    <Form className='reg-form'>
                        <p>Name</p>
                        <Field name="name" className='field' type="text" required/>
                        <p>Email</p>
                        <Field name="email" className='field' type="email" required/>
                        <p>Email Confirmation</p>
                        <Field name="emailConfirm" className='field' type="email" required/>
                        <p>Phone</p>
                        <Field name="phone" className='field' type="tel" required/>
                        <p>Address</p>
                        <Field name="address" className='field' type="text" required/>
                        <button className="btn" disabled={isSubmitting} type='submit'>Finish Order</button>
                    </Form>
                )}

                </Formik>
            </div>
            <p className='end-line'>Not sure yet? <Link to='/' className='reg-log-in'>Keep looking!</Link></p>
        </div>
    )
}
export default FinishOrder