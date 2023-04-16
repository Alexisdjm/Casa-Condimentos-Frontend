import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/singleProduct';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<Products/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
