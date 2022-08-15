import {Formik,Form,Field} from 'formik'
import { toast } from 'react-toastify'
import useAuth from '../../Context/AuthContext'
import { handleError } from '../../helpers/errors'
import '../Register/Register.css'

const ChangePass = () =>{

    const {currentUser,toUpdatePass} = useAuth()

    return (
        <div className='register'>
            <div className='register-main'>
                <h2>Change Password</h2>
                <Formik
                onSubmit={async ({currentPass,newPass,newPassConfirm},{ setSubmitting,resetForm })=>{
                    if(newPass!=newPassConfirm){
                        toast.warn("New password don't match")
                    }
                    else{
                        toUpdatePass(currentUser,currentPass,newPass)
                        .then(()=>{
                            toast.success('Password updated correctly')
                            resetForm()
                        })
                        .catch(e=>handleError(e))
                    }
                    setSubmitting(false);
                }}
                initialValues={{
                    currentPass: '',
                    newPass: '',
                    newPassConfirm: ''}}
                
                >
                    
                {({ isSubmitting })=>(

                    <Form className='reg-form'>
                        {isSubmitting && <h2>Loading</h2>}

                        <p>Current</p>
                        <Field name="currentPass" className='field' type="password" required/>
                        <p>New</p>
                        <Field name="newPass" className='field' type="password" required/>
                        <p>New Confirm</p>
                        <Field name="newPassConfirm" className='field' type="password" required/>
                        <button className="btn" disabled={isSubmitting} type='submit'>Change</button>
                    </Form>
                )}

                </Formik>
            </div>
        </div>
    )
}
export default ChangePass