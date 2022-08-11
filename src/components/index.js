import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Yuri Fernandes</Link>

            <div id='pai'>
                <Link className='links' to='*'>Sobre</Link>
                <a className='links' target='blank' href='https://github.com/Yuriferr'>Projetos</a>
                <Link className='links' to='/api'>API</Link>
                <Link className='links' to='/teste'>Teste</Link>
            </div>
        </header>
    );
}

export default Header;