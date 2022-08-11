import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'animate.css';

function Teste(){
    return(
        <div className='containerTeste'>
            <img className='planeta8 ' src={require('../../assets/Planet-8.png')}></img>
        </div>
    )
}

export default Teste;