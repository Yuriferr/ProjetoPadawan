import { useEffect, useState} from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './style.css';
 
function ProjetoApi(){

    const [personagens, setPersonagens] = useState([]);
    var numberPokemon = "1";

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get(`people/`)
            setPersonagens(response.data.results.slice(0, 20))
        }

        loadApi();
    }, [])

    return(
        <div className='container'>
            {personagens.map((item)=>{
                return(
                    <article key={item.id}>
                        <h1>{item.name}</h1>
                    </article>
                )
            })}
        </div>
    )
}

export default ProjetoApi;