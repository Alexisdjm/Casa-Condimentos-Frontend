import images from '../images/exporting';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({children}) => {
    return(
        <>
            <div className='footer-top-publicity' style={{backgroundImage:`url(${images.bg1})`}}>
                {children}
            </div>
            <section className='footer'>
                <div className='flex-col' style={{gap:'30px'}}>
                    <div className='flex-footer'>
                        <picture className='footer-logo'>
                            <img className='logo-header' src={images.logoNegro} alt='logo'></img>
                        </picture>
                        <div className='flex-col z-fold-max-width footer-menu-box padding-menu'>
                            <h1 className='footer-link-title'>Menú</h1>
                            <Link className='footer-menu-link' to='/'>Inicio</Link>  
                            <Link className='footer-menu-link' to='/products/all/'>Productos</Link> 
                            <a className='footer-menu-link' href='/'>Categorías</a>
                            <a className='footer-menu-link' href='/'>Carrito</a>
                        </div>
                        <div className='flex-col z-fold-max-width footer-menu-box'>
                            <h1 className='footer-link-title'>Contacto</h1>
                            <a className='footer-menu-link' href='/'><FaWhatsapp/>+58-412-1542833</a>
                            <a className='footer-menu-link' href='/'><FaInstagram/>@casa_condimentos28</a>
                            <a className='footer-menu-link' id='mail' href='/'>
                                <img className='logo-footer' src={images.email} alt='logo'></img>
                                casacondimentos@gmail.com
                            </a>
                        </div>
                        <div className='direction-max-width flex-col footer-menu-box'>
                            <h1 className='footer-link-title'>Dirección</h1>
                            <a className='footer-menu-link line-height' href='/'>
                                <img className='logo-footer' src={images.pin} alt='logo'></img>
                                Calle 28 entre carrera 21 y 22, Barquisimeto, Estado Lara, Venezuela
                            </a>
                        </div>

                    </div>
                    <h1 className='bottom-info-site'>© 2023. La Casa de los Condimentos - Mejores Sabores los Tenemos en Casa. Todos los derechos reservados</h1>
                </div>
            </section>
        </>
    )
}

export default Footer