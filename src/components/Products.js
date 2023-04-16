import Toptext from './toptext.js';
import images from '../images/exporting';
import Intro from './presentation.js';
import Header from './header.js';
import Footer from './footer.js';
import Container from './catContainer.js';
import Categories from './categorias.js';
import ProductsContainer from './productsGallery.js';
import Featured from './featured';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {

    const [first, setfirst] = useState('')
    const [second, setSecond] = useState('')

    const array = [
        ['co', ('Condimentos y '), ('Especias')],
        ['bk', ('Productos de '), ('Repostería')],
        ['nt', ('Frutos '), ('Secos')],
        ['gr', ('Granos y '), ('Cereales')],
        ['gc', (''), ('Víveres')],
        ['ch', ('Químicos y '), ('Más')]
    ]

    const location = useLocation()

    const [loc, setLoc] = useState(location.pathname)


    const searchCategory = () => {

        for (let i = 0; i < array.length; i++) {
            if (array[i][0] === loc.split('/').at(-1)) {
                return [array[i][1], array[i][2]]
            }
        }
    }

    useEffect(() => {
        if (loc !== location.pathname) {
            window.scrollTo(0, 0)
        }
        setLoc(location.pathname)
        if ( loc.split('/').at(-1) === 'all') {
            setfirst('Todos Los ');
            setSecond('Productos')
        } else {
            let texts = searchCategory();
            setfirst(texts[0])
            setSecond(texts[1])
        }
    }, [loc, location])
    return(
        <>
            <Header/>
            <Intro image={images.bg3} image2={images.bg1} container='product-centered-text'>
                <Toptext first={first} second={second}/>
            </Intro>
            <Container>
                <Categories margin='categories-section-padding' textalign='categories-text-padding'/>
            </Container>
            <ProductsContainer/>
            <Featured css='products-section-featured flex-col align-center'/>
            <Footer>
                <Toptext first='Síguenos en ' second='Instagram'/>
            </Footer>
        </>
    )
}

export default Products