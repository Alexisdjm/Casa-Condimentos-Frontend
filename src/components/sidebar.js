import { useState } from "react";
import images from "../images/exporting.js";
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = ({togg, func, kind, side, justmobile}) => {

    const [inputValue, setInputValue] = useState('')
    const [results, setResults] = useState([])

    const InputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:8000/api/consulta/?search=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setResults(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return(
        <>
            <div className={`${side === 'left' ? 'sidebar' : 'right-sidebar'} ${justmobile ? 'hide-desktop' : 'show-in-all'} ${kind === 'search' ? 'sidebar-search' : 'sidebar-menu'} ${togg ? 'active' : ''}`}>
                <div className="flex-center">
                    <div className="sidebar-search-logo"><img className="logo-header" src={images.logoNegro} alt="logo"></img></div>
                </div>
                {kind === 'search'  
                    ? (
                    <>
                        <form className="search-form flex-center" onSubmit={handleSearch}>
                            <input type="text" placeholder="Buscar" value={inputValue} className="search-input" onChange={InputChange}></input>
                            <button type="submit" className="submit-button"><FaSearch/></button>
                        </form>
                        <div className="search-results-container">
                            { results ? results.map((result) => {
                                return(
                                    <div key={result.id} className="search-results-flex-h">
                                        <img className="search-img" src={result.image} alt='prueba'></img>
                                        <div className="flex-col">
                                            <h4 className="search-name">{result.name}</h4>
                                            <h4 className="search-price">${result.price}</h4>
                                            <p className="search-description">{result.description}</p>
                                        </div>
                                    </div>
                                )
                            }) : (
                                <h4>No se ha encontrado resultados</h4>
                            )}
                        </div>
                    </>
                    )
                    : (
                        <div className="flex-col menu-component">
                            <Link className='sidebar-link' to='/'>Inicio</Link>    
                            <Link className='sidebar-link' to='/products/all'>Productos</Link>                       
                            <a className='sidebar-link' href='/'>Categorias</a>                       
                            <Link to='/cart' className='sidebar-link'>Carrito</Link>
                        </div>
                    )
                }
            </div>
            <div className={`${togg ? 'sidebar-overlay active' : 'sidebar-overlay' } ${justmobile ? 'hide-desktop' : 'show-in-all'}`} onClick={func}></div>
        </>
    )
}

export default Sidebar