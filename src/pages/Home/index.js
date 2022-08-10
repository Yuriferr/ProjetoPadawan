import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'animate.css';

function Home(){
    return(
        <div className='container'>
                <div className='box'>
                        <div className='texto'>
                            <h1 className='animate__fadeIn'>Yuri Fernandes</h1>
                            <h3 className='animate__fadeIn'>Desenvolvedor Full-stack</h3>
                            <Link to='/api' className='btnVisualizar animate__fadeIn'>Visualizar ➜</Link>
                        </div>
                        <img className='planet animate__animated animate__zoomIn' src={require('../../assets/Planet-9.png')}/>
                </div>
        </div>
    )
}

export default Home;