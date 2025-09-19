import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductCard from './components/ProductCard'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/productlist" element= {<ProductList/>} />
        <Route path="/productcart" element= {<ProductCard/>} />
        <Route path="/productdetail" element= {<ProductDetail/>} />
      </Routes>

      {/* <Home/> */}
      {/* <ProductList/> */}

    </>
  )
}

export default App
