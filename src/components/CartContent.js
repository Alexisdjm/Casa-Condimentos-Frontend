import { useEffect, useState } from "react"
import images from "../images/exporting"
import { useLocation } from "react-router-dom"

const CartContent = () => {

    const [items, setItems] = useState(null)
    const [total, setTotal] = useState(0)

    const location = useLocation()

    function fetchData(url) {
        fetch(url)
        .then(data => data.json())    
        .then(json => {
            setItems(json)
            for (let i = 0; i < json.length; i++) {
                setTotal(prevTotal => prevTotal + json[i].price)
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0,0)
        fetchData(`http://127.0.0.1:8000/api/cart`)  
        
    }, [location])
    
    return (
        <>
            <div className="svg-next-container">
                <div className="flex-center" style={{gap: '1em'}}>
                    <div className="cart-items-container flex-col">
                        <div className="simple-flex space-between">
                            <h1 className="cart-title">Carrito</h1>
                            <h4 className="cart-box-price-label">Precio</h4>
                        </div>
                        <div className="cart-items-box">
                            { items ? items.map((product) => {
                                return(
                                    <div key={product.id} className="cart-item">
                                        <div className="cart-item-align">
                                            <div className="simple-flex align-center" style={{gap: '1em'}}>
                                                <label className="container">
                                                    <input type="checkbox"></input>
                                                    <div className="checkmark"></div>
                                                </label>
                                                <img className="cart-item-img" src={product.image} alt="sample"></img>
                                            </div>
                                            <div className="flex-col cart-item-info">
                                                <h4>{product.name}</h4>
                                                <p>{product.description}</p>
                                            </div>
                                            <h4 className="cart-item-price">${product.price}</h4>
                                        </div>
                                    </div>
                                )
                            }) : ''}
                        </div>
                        <h4 className="cart-items-total">Subtotal ({items ? items.length : 0} Productos): <strong>${parseFloat((total/2).toFixed(2))}</strong></h4>
                    </div>
                    <div className="checkout-cart-box flex-col">
                        <div className="simple-flex space-between">
                            <h4 className='subtotal'>Subtotal (x Productos):</h4>
                            <h4 className="cart-item-price">${parseFloat((total/2).toFixed(2))}</h4>
                        </div>
                        <button className="purchase-btn">Proceder al Pago</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartContent