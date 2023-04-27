import Featured from "./featured"
import images from "../images/exporting"
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';

const Item = () => {

    const location = useLocation()
    const [url, setUrl] = useState(location.pathname)

    const [cantidad, setcantidad] = useState(1)
    const [medida, setMedida] = useState(1)
    const [product, setProduct] = useState([
        {id: '1', name: 'name', price: '9.99', description: 'description',image: images.cuatrocondimentos, category: 'cat' }
    ])

    const [category, setCategory] = useState('')

    const array = [
        ['co', 'Condimentos y Especias'],
        ['bk', 'Productos de Repostería'],
        ['nt', 'Frutos Secos'],
        ['gr', 'Granos y Cereales'],
        ['gc', 'Víveres'],
        ['ch', 'Químicos y Más']
    ]



    function fetchData(url) {
        fetch(url)
        .then(data => data.json())    
        .then(json => {
            for (let i = 0; i < array.length; i++) {
                if (array[i][0] === json[0].category) {
                    setCategory(array[i][1])
                }
            }  
            setProduct(json)
        })
    }

    useEffect(() => {
        window.scrollTo(0,0)
        setUrl(location.pathname)
        fetchData(`http://127.0.0.1:8000/api/item/${url.split('/').at(-1)}`)  
        
    }, [location, url])

    return(
        <>
            <div className="horizontal-padding">
                <div className="single-product-page">
                    <div className="single-product-img flex-col center align-center">
                        <img src={product[0].image} alt='prueba'></img>
                    </div>
                    <div className="single-product-info">
                        <div className="product-info-container">
                            <h4>{category}</h4>
                            <h1>{product[0].name}</h1>
                            <p className="product-description">{product[0].description}</p>
                            <p className="price-description">Precio en Kg: <strong>${product[0].price}</strong></p>
                        </div>
                    </div>
                    { product[0].category === 'co' || product[0].category === 'nt'
                    ? (<div id="mobile-gr">
                        <h4 className="purchase-caption">En gramos</h4>
                        <label className="toggle-switch">
                        <input type="checkbox" onChange={(e) => {
                            if (e.target.checked) {
                                setcantidad(100)
                                setMedida(100)
                            } else {
                                setcantidad(1)
                                setMedida(1)
                            }
                        }}></input>
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                        </label>
                    </div>) : ''}
                    <div className='flex-center purchase-box-container'>
                        <div className="purchase-box flex-col">
                            {product[0].category === 'co' || product[0].category === 'nt'
                            ? (
                                <div id="desktop-gr">
                                <h4 className="purchase-caption">En gramos</h4>
                                <label className="toggle-switch">
                                <input type="checkbox" onChange={(e) => {
                                    if (e.target.checked) {
                                        setcantidad(100)
                                        setMedida(100)
                                    } else {
                                        setcantidad(1)
                                        setMedida(1)
                                    }
                                }}></input>
                                <div className="toggle-switch-background">
                                    <div className="toggle-switch-handle"></div>
                                </div>
                                </label>
                            </div>
                            ) : ''}
                            
                            <div>
                                <h4 className="purchase-caption">Cantidad</h4>
                                <div className="flex-center" style={{padding: '0 0 10px'}}>
                                    <button className='menos-btn' onClick={() => {
                                        if (medida === 1) {
                                            cantidad <= 1 ? setcantidad(cantidad) : setcantidad(cantidad - medida)    
                                        } else {
                                            cantidad <= 100 ? setcantidad(cantidad) : setcantidad(cantidad - medida)    
                                        }
                                    }}>-</button>
                                    <input className="cantidad" value={cantidad} readOnly type="text"></input>
                                    <button className='mas-btn' onClick={() => {setcantidad(cantidad + medida)}}>+</button>
                                </div>
                            </div>
                            <div className="price-align">
                                <div className="simple-flex space-between">
                                    <h4 className="price-spec">Precio</h4>
                                    <h4 className="price-numbers">${product[0].price ? product[0].price : 1}</h4>
                                </div>
                                <hr></hr>
                                <div className="simple-flex space-between">
                                    <h4 className="price-spec">Total</h4>
                                    <h4 className="price-numbers">$
                                        { product[0].price  
                                            ? medida === 100 ? product[0].price*(cantidad/100) : product[0].price*cantidad
                                            : medida === 100 ? 1*(cantidad/100) : 1*cantidad
                                        }
                                    </h4>
                                </div>
                            </div>
                            <div className='flex-col buttons-container'>
                                <button className='cart-btn'>Agregar al Carrito</button>
                                <button className="purchase-btn">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Featured css='flex-col align-center section-margin'/>
        </>
    )
} 
export default Item