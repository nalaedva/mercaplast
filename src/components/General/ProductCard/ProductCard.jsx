import './ProductCard.css';
import { Button,  CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ProductCard = ({titulo, precio}) => {
    return (
        <article className="productCard">
            <img src="https://dlucas.com.pe/wp-content/uploads/2021/03/papel-aluminio-5-mts.jpg"  alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
             </div>

             <CardActions sx={{ justifyContent: "center" }}>
                <ItemCount />
             </CardActions>

            <CardActions  sx={{ justifyContent: "center" }}>
                <Button variant="contained" size="small" color="primary" style={{textTransform: 'none'}}>
                    Agregar al carrito
                </Button>
            </CardActions>

        </article>
    )
}

export default ProductCard;