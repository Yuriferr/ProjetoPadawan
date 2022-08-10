import './style.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Yuri Fernandes</Link>

            <div>
                <Link className='links' to='/api'>Sobre</Link>
                <Link className='links' to='/api'>Projetos</Link>
                <Link className='links' to='/api'>API</Link>
            </div>
        </header>
    );
}

export default Header;