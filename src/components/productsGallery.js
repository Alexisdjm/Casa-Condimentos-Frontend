import { useEffect, useState } from "react";

const ProductsContainer = () => {

    const [elements, setElements] = useState(null)

    async function fetchData(url, state) {
        const res = await fetch(url)
        const data = await res.json()
        
        return state(data.results)
    }

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character', setElements)
    }, [])

    return(
        <>
            <div className="Products-container">
                <div className="products-flex">
                    { elements !== null ? elements.map((product) => {
                        return(
                            <div key={product.id} className='featured-product-card gallery-products flex-col align-center center'>
                                <div className='product-image-container'>
                                    <img className='product-img' src={product.image} alt={product.name}></img>
                                    <div className='flex-col product-inner-text'>
                                        <h1 className='product-name'>{product.name}</h1>
                                        <h4 className='product-price'>{product.price + ' $'}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className='featured-product-card flex-col align-center center'></div> }
                </div>
                <div className="custom-shape-divider-bottom-1681526847">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer