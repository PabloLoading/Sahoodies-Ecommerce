import CartWidget from '../CartWidget/CartWidget';
import LinkedTitle from '../LinkedTitle/LinkedTitle';
import IconButton from '../IconButton/IconButton';
import {VscAccount} from 'react-icons/vsc';
import {FiSearch} from 'react-icons/fi';
import './NavBar.css'
import {Link } from 'react-router-dom'

function NavBar(){
    return (
        <div className='NavBar'>
            <nav>
                <div className='left-wrapper'>
                    <Link to='/' className='link'><h1>Sahoodies</h1></Link>
                    <ul>
                        <LinkedTitle target='/category/chicos' title='Chicos'/>
                        <LinkedTitle target='/category/chicas' title='Chicas'/>
                        <LinkedTitle target='/category/ofertas' title='Ofertas'/>
                    </ul>
                </div>
                <ul className='icons-list'>
                    <div className='nav-left-icons'><IconButton to='/search' icon={FiSearch}/></div>
                    <div className='nav-left-icons'><IconButton to='/profile'  icon={VscAccount}/></div>
                    <CartWidget itemsNum={2}/>
                </ul>
            </nav>
        </div>
        )
}
export default NavBar;