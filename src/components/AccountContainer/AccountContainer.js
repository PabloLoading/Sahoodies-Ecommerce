import '../Register/Register.css'
import './AccountContainer.css'
import {Formik,Form,Field} from 'formik'
import { Link } from 'react-router-dom'
import { setUser } from '../../services/firebase/firestore/users'
import useUser from '../../hooks/useUser'
import { toast } from 'react-toastify'
import OrderList from '../OrderList/OrderList'

const AccountContainer=()=>{

    const {dbUser,error,isLoading,currentUser} = useUser()
    
    if(error)console.log(error)
    
    if(isLoading){
        return <p>Loading...</p>
    }
    const {orders,name,phone,address,id}=dbUser
    const ordersReversed=orders.slice().reverse()
    
    return (
        <div className='account-container fitted'>
            <div className='register-main user-info'>
                <h2>My Account</h2>
                    <Formik enableReinitialize={true}
                    onSubmit={async ({name,phone,address},{ setSubmitting})=>{
                        
                        let info={name,phone,address,orders}
                        try{ 
                            await setUser(id,info)
                            toast.success('Info updated succesfully')
                        }
                        catch(e){
                            toast.error('Something broke :(')                            
                            console.log(e)}
                        setSubmitting(false);
                    }}
                    initialValues={{name,phone,address}}>
                
                    {({ isSubmitting })=>(

                        <Form className='reg-form'>
                            {isSubmitting && <h3>Loading</h3>}
                            <p>Email</p>
                            <p className='field f-shadow ld'>{currentUser.email}</p>
                            <p>Name</p>
                            <Field name="name" className='field f-shadow' type="text"/>
                            <p>Phone</p>
                            <Field name="phone" className='field f-shadow' type="text"/>
                            <p>Address</p>
                            <Field name="address" className='field f-shadow' type="text"/>
                            <button className="btn" disabled={isSubmitting} type='submit'>Update Info</button>
                        </Form>
                    )}
                    </Formik>


                    <p className='end-line ls'>Want to change password? <Link to='/change-password' className='reg-log-in'> Change it here!</Link></p>
            </div>
            <section className='register-main'>
                <h2>My Orders</h2>
                {orders.length==0 ? <p>You dont have any orders, <Link to='/'className='reg-log-in'>Go get Some!</Link></p>
                : <OrderList orders={ordersReversed}/>}
                
            </section>
        </div>
    )
}
export default AccountContainer