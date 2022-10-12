import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/General/NavBar/NavBar';
import Chips from './components/General/Products/Chips';
import ItemContainer from './components/General/Detail/ItemContainer';
import Error404 from './components/General/Error404';
import Category from './components/General/Category/Category'
import FreeShipping from './components/General/FreeShipping';
import Footer from './components/General/Footer/Footer';
import Cart from './components/Cart/index';
import Home from './components/Home';
import {Store} from './store';
 
function App() {
    const [data, setData] = useState({
        items: [],
        cantidad: 0,
    })
    return ( 
    <Store.Provider value={[data, setData]}>
        <BrowserRouter>
            <FreeShipping />
            <NavBar />
            <Chips />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/cart" element={<Cart />} />
                    <Route path="/category/:category_name" 
                    element={<Category />} 
                    />
                    <Route path="/detail/:productId" element={<ItemContainer />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    </Store.Provider>
    );
}

export default App;