import images from '../images/exporting'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from "react";
import Sidebar from './sidebar.js';
import { Link } from 'react-router-dom';

const Header = () => {

    const [toggle, setToggle] = useState(false)
    const [menu, setMenu] = useState(false)

    const setSidebar = (e) => {
        e.preventDefault()
        toggle ? setToggle(false) : setToggle(true)
    }

    const setMenuu = (e) => {
        e.preventDefault()
        menu ? setMenu(false) : setMenu(true)
    }

    const [header, setHeader] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setHeader(true)
            } else {
                setHeader(false)  
            }
        })
      }, []);

    return(
        <>
            <div className={!header ? 'header-container' : 'header-container-scroll'}>
                <div className='simple-flex space-between header-align align-center'>
                    <a className='icon-link mobile-show' href='/' onClick={setSidebar}>
                        <img className='mobile-header-icons' src={!header ? images.searchNaranja : images.search} alt='cart'></img>
                    </a>
                    <div className='flex-center header-containers-gap left-links-width' style={{width:'38%'}}>
                        <Link className={!header ? 'each-link' : 'scroll-link'} to='/'>Inicio</Link>  
                        <Link className={!header ? 'each-link' : 'scroll-link'} to='/products/all'>Productos</Link>                      
                        <a className={!header ? 'each-link' : 'scroll-link'} href='/'>Categorias</a>                       
                        <a className={!header ? 'each-link' : 'scroll-link'} href='/' onClick={setSidebar}>Buscar</a>  
                    </div>
                    <picture className={!header ? 'logo-header-container align-logo-center' : 'logo-header-container-scroll align-logo-center'}>
                        <img className='logo-header' src={!header ? images.logoNaranja : images.logoNegro} alt='logo'></img>
                    </picture>
                    <a className='icon-link mobile-show' href='/' onClick={setMenuu}>
                        <img className={!header ? 'mobile-menu-icon' : 'mobile-scroll-menu'} src={!header ? images.menuNaranja : images.menu} alt='cart'></img>
                    </a>
                    <div className='right-links flex-center header-containers-gap align-center' style={{width:'30%'}}>
                        <a className='icon-link' href='/'><img className='small-logo-header' src={!header ? images.bolsaNaranja : images.bolsa} alt='cart'></img></a>
                        <a className={!header ? 'icon-link icons-svg-dimensions icon-margin-fit simple-flex' : 'icon-link icons-svg-scroll icon-margin-fit simple-flex'} href='/'><FaInstagram/></a>
                        <a className={!header ? 'icon-link icons-svg-dimensions icon-margin-fit simple-flex' : 'icon-link icons-svg-scroll icon-margin-fit simple-flex'} href='/'><FaWhatsapp/></a>
                        <a className={!header ? 'contact-btn' : 'scroll-contact-btn'} href='/'>Contactanos</a>
                    </div>
                </div>
            </div>
            <Sidebar togg={toggle} func={setSidebar} kind='search' side='left' justmobile={false}/>
            <Sidebar togg={menu} func={setMenuu} kind='menu' side='right' justmobile={true}/>
        </>
    )
}

export default Header