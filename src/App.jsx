import {useState} from 'react'
import NavBar from './components/General/NavBar/NavBar'
import Chips from './components/General/Products/Chips'
import FeaturedProducts from './components/General/Products/FeaturedProducts'
import Category from './components/General/Category/Category'
import ItemContainer from './components/General/Detail/ItemContainer'


function App() {
    const [nombre, setNombre ] = useState ('');

    const actualizarNombre = (e) => {
        setNombre(e.target.value);
    }

    return ( 
        <>
        <NavBar />
        <Chips />
        <FeaturedProducts />
        {/* <p>{nombre}</p> */}
        {/* <button onClick={() => setNombre('Valeria')}>Cambiar nombre</button> */}

        {/* <input type="text" value={nombre} onChange={actualizarNombre} /> */}
        <ItemContainer />
        </>

        
    );
}

export default App;