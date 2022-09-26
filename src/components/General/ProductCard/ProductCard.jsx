import './ProductCard.css';
import { Button,  CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
    return (
        <article className="productCard">
            <img src="https://thouy.es/2678-medium_default/rollo-papel-de-aluminio-alimentario-030x200-m.jpg"  alt="Mi producto de prueba"/>
            <div>
                <h3>{product.Name}</h3>
                <p>${product.SalesPrice}</p>
             </div>

             {/* <CardActions sx={{ justifyContent: "center" }}>
                <ItemCount />
             </CardActions> */}

            <CardActions  sx={{ justifyContent: "center" }}>
                {/* <Button variant="contained" size="small" color="primary" style={{textTransform: 'none'}}>
                    Agregar al carrito
                </Button> */}
                <Link to={`/detail/${product.Name}`}>
                Detalles</Link>
            </CardActions>

        </article>
    )
}

export default ProductCard;