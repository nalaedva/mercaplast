import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

// LISTA STARWARS
const Category = () => {
    
    // const [people, setPeople] = useState([]);

    // const getPeople = async () => {
    //     try {
    //         let response = await axios ('https://swapi.dev/api/people/');

    //         setPeople(response.data.results);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getPeople();
    // },[])
    
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
        </>
    );
}
 
export default Category;