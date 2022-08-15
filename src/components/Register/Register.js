import {Formik,Form,Field} from 'formik'
import '../Register/Register.css'
import { Link } from 'react-router-dom'
import useAuth from '../../Context/AuthContext'
import { setUser } from '../../services/firebase/firestore/users'
import { toast } from 'react-toastify'
import { handleError } from '../../helpers/errors'


const Register = () =>{

    const {signup}=useAuth()

    return (
        <div className='register'>
            <div className='register-main'>
                <h2>Sign Up</h2>
                <Formik


                onSubmit={async ({email,password,passwordConfirm},{ setSubmitting })=>{
                    if(password!=passwordConfirm){
                        toast.warn("Passwords don't match")
                    }
                    else{

                        signup(email,password)
                        .then(currentUser=>{
                            let userId=currentUser.uid
                            setUser(userId,{})
                            toast.success("correctly signed up")
                        })
                        .catch(e=>handleError(e))
                    }
                    setSubmitting(false);
                }}
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirm: ''}}
                
                >
                    
                {({ isSubmitting })=>(

                    <Form className='reg-form'>
                        {isSubmitting && <h2>Loading</h2>}

                        <p>Email</p>
                        <Field name="email" className='field' type="email" required/>
                        <p>Password</p>
                        <Field name="password" className='field' type="password" required/>
                        <p>Password Confirmation</p>
                        <Field name="passwordConfirm" className='field' type="password" required/>
                        <button className="btn" disabled={isSubmitting} type='submit'>Sign Up</button>
                    </Form>
                )}

                </Formik>
            </div>
            <p className='end-line'>Already have an account? <Link to='/login' className='reg-log-in'>Login here</Link></p>
        </div>
    )
}
export default Register