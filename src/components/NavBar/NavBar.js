import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import {Link } from 'react-router-dom'
import useAuth from '../../Context/AuthContext';
import {saveProducts} from '../../services/firebase/firestore/users';
import useCart from '../../Context/CartContext';
import useUser from '../../hooks/useUser';
import useData from '../../hooks/useData'
import { getCategories } from '../../services/firebase/firestore/categories';

import {VscAccount} from 'react-icons/vsc';
import {MdLogout} from  'react-icons/md'
import CategoryList from '../CategoryList/CategoryList';

function NavBar(){

    const {products,getQuantity} = useCart()
    const {currentUser,signOut} = useAuth()
    const {dbUser} = useUser()
    const {data:categories} = useData(getCategories,[],[])

    const itemsQuant=getQuantity()
    if(categories?.length>4) categories.length=4

    const loginOut= async ()=>{
        if(dbUser){
            signOut()
            saveProducts(dbUser,products)
        }
    }
    
    


    return (
        <div className='NavBar '>
            <nav className='fitted'>
                <div className='left-wrapper'>
                    <Link to='/' className='link'><h1>Sahoodies</h1></Link>
                    <div className='dr'>
                        <CategoryList categories={categories}/>
                    </div>                    
                </div>
                <ul className='icons-list'>
                    {currentUser && 
                    <div className='nav-left-icons' onClick={loginOut}>
                        {<MdLogout size='1.5rem'/>}
                    </div>}
                    
                    <div className={currentUser ? 'nav-left-icons account': 'nav-left-icons'}>
                        <Link className='link ' to={currentUser ? 'account' : 'login'}>
                            <VscAccount size='1.6rem'/>
                        </Link>
                    </div>
                    {itemsQuant>0 && <CartWidget itemsQuant={itemsQuant}/>}
                </ul>
                
            </nav>
            <div className='tiny-view-titles fitted'>
                <CategoryList categories={categories}/>
            </div> 
             
        </div>
        )
}
export default NavBar;