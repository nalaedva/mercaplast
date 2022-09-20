import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

const ItemContainer = () => {
    let { productId } = useParams();
    console.log(productId);
    return (  
        <>
            {
                productId ?
                <>
                <ProductDetail productName={productId} />
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