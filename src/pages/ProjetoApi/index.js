import { useEffect, useState} from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './style.css';
 
function ProjetoApi(){

    const [loading, setLoading] = useState(true);
    const [gatos, setGatos] = useState([]);

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get(`search?`, {
                params:{
                    limit: "20",
                    api_key: "1ff3134e-d8ac-4ccc-8265-6e7f89daa81a"
                }
            })
            setGatos(response.data)
            setLoading(false)
        }

        loadApi();
    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h1>Carregando Pagina...</h1>
            </div>
        )
    }

    return(
        <div className='containerApi'>
            {gatos.map((item)=>{
                return(
                    <article key={item.id}>
                        <div className='catDiv'>
                            <img className='' src={item.url}/>
                            <Link to='/'>VOLTAR</Link>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ProjetoApi;