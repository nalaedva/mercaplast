import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// LISTA STARWARS
const Category = () => {
    
    const [Product, setProducts] = useState([]);

     const getProducts = async () => {
         try {
             let response = await axios.post('https://app-pos.azurewebsites.net/Services/Merchandise/Product/GetListOfProducts', {
                "Take": 10,
                "CompanyId": 2,
                "Skip": 0
            });

            console.log(response);

            setProducts(response.data.Entities);
         } catch(err) {
             console.log(err);
         }
     }

     useEffect(() => {
         getProducts();
     },[])

    //  const [people, setPeople] = useState([]);

    //  const getPeople = async () => {
    //      try {
    //          let response = await axios ('https://swapi.dev/api/people/');

    //         setPeople(response.data.results);
    //      } catch(err) {
    //          console.log(err);
    //      }
    //  }

    //  useEffect(() => {
    //      getPeople();
    //  },[])
    
    const {category_name} = useParams();
    
    useEffect (() => {
        console.log(category_name);
    },[category_name])

 
    return (  
        <>
        <h1>{category_name}</h1>
        {/* {
            people.length ?
            people.map(person => (
                <article key={person.created}>
                <h2>{person.name}</h2>
                <p>Altura: {person.height}</p>
                </article>
            )) :
            <p>Cargando personajes...</p>
        } */}
        {
            Product.length ?
            Product.map(product => (
                <article key={product.Id}>
                <h2>{product.Name}</h2>
                <p>Detalles:{product.Description}</p>
                <p>Precio $ {product.SalesPrice}</p>
                </article>
            )) :
            <p>Cargando productos...</p>
        }
        </>
    );
}
 
export default Category;