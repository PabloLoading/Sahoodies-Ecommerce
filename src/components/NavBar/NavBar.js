import CartWidget from '../CartWidget/CartWidget';
import LinkedTitle from '../LinkedTitle/LinkedTitle';
import IconButton from '../IconButton/IconButton';
import {VscAccount} from 'react-icons/vsc';
import {FiSearch} from 'react-icons/fi';
import './NavBar.css'

function NavBar(){
    return (
        <div className='NavBar'>
            <nav>
                <div className='left-wrapper'>
                    <h1>Sahoodies</h1>
                    <ul>
                        <LinkedTitle target='#' title='Chicos'/>
                        <LinkedTitle target='#' title='Chicas'/>
                        <LinkedTitle target='#' title='Ofertas'/>
                    </ul>
                </div>
                <ul className='icons-list'>
                    <IconButton margin='0 1.2rem' icon={FiSearch}/>
                    <IconButton margin='0 1.2rem' icon={VscAccount}/>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
        )
}
export default NavBar;