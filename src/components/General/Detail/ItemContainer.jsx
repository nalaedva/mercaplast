import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

const ItemContainer = () => {
    const {id} = useParams();

    const [item, setItem] = useState(null);
   
    const getItems = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                nombre: "Contenedor vasos",
                foto:"https://www.desechablesmonterrey.com/wp-content/uploads/2014/11/PACTIVM51-0032.jpg",
                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum ante ut diam convallis, a euismod nisl tempor. Pellentesque a nisi in nulla interdum ornare. ",
                precio: 500
            })
          },2000);
    });

    useEffect(() => {
        getItems.then(response => setItem(response))
        .catch(error => console.log(error));
    }, []);

    return (  
        <>
            {
                item ?
                <>
                <ProductDetail product={item} />
                    <section>
                    Otros productos recomendados
                    </section>
                </> :
                <p>Cargando productos...</p>
            }
        
        </>
    );
}
 
export default ItemContainer;