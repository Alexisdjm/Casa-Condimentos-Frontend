import images from "../images/exporting.js";
import { FaSearch } from 'react-icons/fa';

const Sidebar = ({togg, func, kind, side, justmobile}) => {

    const Menu = () => {
        return(
            <>
                <div className="flex-col menu-component">
                    <a className='sidebar-link' href='/'>Inicio</a>  
                    <a className='sidebar-link' href='/'>Productos</a>                      
                    <a className='sidebar-link' href='/'>Categorias</a>                       
                    <a className='sidebar-link' href='/' >Carrito</a>  
                </div>
            </>
        )
    }
    
    const SearchForm = () => {
        return(
            <form className="search-form flex-center">
                <input type="text" placeholder="Buscar" className="search-input"></input>
                <button type="submit" className="submit-button"><FaSearch/></button>
            </form>
        )
    }

    return(
        <>
            <div className={`${side === 'left' ? 'sidebar' : 'right-sidebar'} ${justmobile ? 'hide-desktop' : 'show-in-all'} ${kind === 'search' ? 'sidebar-search' : 'sidebar-menu'} ${togg ? 'active' : ''}`}>
                <div className="flex-center">
                    <div className="sidebar-search-logo"><img className="logo-header" src={images.logoNegro} alt="logo"></img></div>
                </div>
                {kind === 'search'  
                    ? <SearchForm/>
                    : <Menu/>
                }
            </div>
            <div className={`${togg ? 'sidebar-overlay active' : 'sidebar-overlay' } ${justmobile ? 'hide-desktop' : 'show-in-all'}`} onClick={func}></div>
        </>
    )
}

export default Sidebar