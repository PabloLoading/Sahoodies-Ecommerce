import {Formik,Form,Field} from 'formik'
import '../Register/Register.css'
import { Link } from 'react-router-dom'
import useAuth from '../../Context/AuthContext'
import { getUser } from '../../services/firebase/firestore/users'
import useCart from '../../Context/CartContext'
import { toast } from 'react-toastify'
import { handleError } from '../../helpers/errors'

const Login = () =>{

    const {login}=useAuth()
    const {setProducts} = useCart()

    return (
        <div className='register'>
            <div className='register-main'>
                <h2>Login</h2>
                <Formik
                onSubmit={async ({email,password},{ setSubmitting })=>{
                    login(email,password)
                    .then(async(currentUser)=>{
                        toast.success('loged succesfully')
                        let dbUser = await getUser(currentUser.uid)
                        setProducts(dbUser.products)
                    })
                    .catch(e=>handleError(e))
                    setSubmitting(false);
                }}
                initialValues={{
                    email: '',
                    password: ''}}>
                    
                {({ isSubmitting })=>(

                    <Form className='reg-form'>
                        <p>Email</p>
                        <Field name="email" className='field' type="email" required/>
                        <p>Password</p>
                        <Field name="password" className='field' type="password" required/>
                        <button className="btn" disabled={isSubmitting} type='submit'>Login</button>
                        {false && <Link className="btn login link" to="/login">Login</Link>}
                    </Form>
                )}

                </Formik>
            </div>
            <p className='end-line'>Need an account? <Link to='/signup' className='reg-log-in'>Sign Up here</Link></p>
        </div>
    )
}
export default Login