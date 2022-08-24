import './ProductCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({titulo, precio}) => {
    return (
        <article className="productCard">
            <img src="https://dlucas.com.pe/wp-content/uploads/2021/03/papel-aluminio-5-mts.jpg"  alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>

            <CardActions>
                <Button size="small" color="primary">
                Comprar
                </Button>
            </CardActions>

        </article>
    )
}

export default ProductCard;