import swAlert from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom'

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0) {
            swAlert(<h2>Tienes que escribir una palabra clave</h2>)
        } else if (keyword.length < 4) {
            swAlert(<h2>Tienes que escribir 4 o mas caracteres</h2>)
        } else {
            navigate(`/resultados?keyword=${keyword}`)
            e.currentTarget.keyword.value = ''
        }
        
    }

    return (
        <form className='d-flex' onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2"> 
          <input type="text" name="keyword" className="form-control" placeholder="Buscar..."/>
        </label>
        <button className="btn btn-success" type="submit">Buscar</button>
    </form>
    )
}

export default Buscador;
