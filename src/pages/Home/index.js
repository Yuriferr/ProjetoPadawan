import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'animate.css';

function Home(){
    return(
        <div className='container'>
                <div className='box'>
                        <div className='texto'>
                            <h1>Yuri Fernandes</h1>
                            <h3>Desenvolvedor Full-stack</h3>
                            <p>"Eu não posso mais estar paralisado pelos críticos. Meu novo mantra é, se você não está na arena recebendo sua bunda chutada de vez em quando eu não estou interessado em seu feedback. Você não consegue se sentar no assento de fraude e criticar minha aparência ou meu trabalho com espirituição média, se você também não está na arena."</p>
                            <strong>Brené Brown</strong>
                        </div>
                        <div className='img'>
                        <img className='animate__animated animate__zoomIn' src={require('../../assets/Planet-9.png')}/>
                        </div>
                </div>
                <div className='fundo'></div>
            
        </div>
    )
}

export default Home;