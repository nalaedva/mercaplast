import {useState, useEffect} from 'react';
import Carousel from './Carousel/Carousel';
import FeaturedProducts from '../General/Products/FeaturedProducts'
import ProductCategories from './ProductCategories/ProductCategories';
import Newsletter from './Newsletter/Newsletter'

const Home = () => {

    return (
        <>
            <Carousel />
            <FeaturedProducts />
            <ProductCategories />
            <Newsletter />
        </>
    )
}

export default Home;