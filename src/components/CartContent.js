import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const CartContent = () => {

    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    const location = useLocation()

    function fetchData(url) {
        fetch(url)
        .then(data => data.json())    
        .then(json => {
            setItems(json.cart)
            setTotal(json.total)
        })
    }

    useEffect(() => {
        window.scrollTo(0,0)
        fetchData(`http://127.0.0.1:8000/api/cart/`)  
    }, [location])
    
    return (
        <>
            <div className="svg-next-container">
                <div className="cart-boxes-container">
                    <div className="cart-items-container flex-col">
                        <div className="simple-flex space-between">
                            <h1 className="cart-title">Carrito</h1>
                            <h4 className="cart-box-price-label">Precio</h4>
                        </div>
                        <div className="cart-items-box">
                            { items ? Object.keys(items).map((product) => {
                                const subObjeto = items[product];
                                return(
                                    <div id={subObjeto.id} key={subObjeto.id} className="cart-item">
                                        <div className="cart-item-align">
                                            <label className="container">
                                                <input type="checkbox"></input>
                                                <div className="checkmark"></div>
                                            </label>
                                            <img className="cart-item-img" src={subObjeto.image} alt="sample"></img>
                                            <div className="flex-col cart-item-info">
                                                <h4>{subObjeto.name}</h4>
                                                <p>{subObjeto.description}</p>
                                                <h4 className="hidden-price">${subObjeto.price}</h4>
                                            </div>
                                            <h4 className="cart-item-price">${subObjeto.price}</h4>
                                        </div>
                                    </div>
                                )
                            }) : <h1>No hay productos en el Carrito</h1>}
                        </div>
                        <h4 className="cart-items-total">Subtotal ({items ? Object.keys(items).length : 0} Productos): <strong>${parseFloat(total.toFixed(2))}</strong></h4>
                        <button className="purchase-btn">Proceder al Pago</button>
                    </div>
                    <div className="checkout-cart-box flex-col">
                        <div className="simple-flex space-between">
                            <h4 className='subtotal'>Subtotal ({items ? Object.keys(items).length : 0} Productos):</h4>
                            <h4 className="cart-item-price">${parseFloat(total.toFixed(2))}</h4>
                        </div>
                        <button className="purchase-btn">Proceder al Pago</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartContent