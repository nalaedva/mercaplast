import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/General/NavBar/NavBar'
import Chips from './components/General/Products/Chips'
import FeaturedProducts from './components/General/Products/FeaturedProducts'
import ItemContainer from './components/General/Detail/ItemContainer'
import Error404 from './components/General/Error404'
import Category from './components/General/Category/Category'


function App() {

    return ( 

        <BrowserRouter>
            <NavBar />
            <Chips />
                <Routes>
                    <Route exact path="/" element={<FeaturedProducts />} />
                    <Route path="/category/:category_name" 
                    element={<Category />} 
                    />
                    <Route path="/detail/:id" element={<ItemContainer />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
        </BrowserRouter>
        
    );
}

export default App;