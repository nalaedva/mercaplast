import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/General/NavBar/NavBar'
import Chips from './components/General/Products/Chips'
import FeaturedProducts from './components/General/Products/FeaturedProducts'
import ItemContainer from './components/General/Detail/ItemContainer'
import Error404 from './components/General/Error404'
import Category from './components/General/Category/Category'
import FreeShipping from './components/General/FreeShipping'
import Footer from './components/General/Footer/Footer'
import Slider from './components/Home/Slider/Index'


function App() {

    return ( 

        <BrowserRouter>
            <FreeShipping />
            <NavBar />
            <Chips />
                <Routes>
                    <Route exact path="/" element={<FeaturedProducts />} />
                    <Route path="/category/:category_name" 
                    element={<Category />} 
                    />
                    <Route path="/detail/:productId" element={<ItemContainer />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            <Footer />
        </BrowserRouter>
        
    );
}

export default App;