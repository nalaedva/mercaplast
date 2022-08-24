import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';


const FeaturedProducts = () => {
    return (  
      <>
        <Typography 
          variant = "h6"
          color = "primary"
          sx={{
            fontWeight: '600', 
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
            p: 2
            
          }}
        >Productos Destacados</Typography>

        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 250, 
                p: 1,
                m: 2 }}>
              <ProductCard titulo="Rollo Aluminio 7mt" precio="2200"/>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 250, 
                p: 1,
                m: 2 }}>
              <ProductCard titulo="Aceite Mineral 1lt" precio="10000"/>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 250, 
                p: 1,
                m: 2 }}>
              <ProductCard titulo="Balde 10lt" precio="5000"/>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ maxWidth: 250, 
                p: 1,
                m: 2 }}>
              <ProductCard titulo="Bolsa Transparente" precio="6500"/>
            </Card>
          </Grid>

        </Grid>
       
        
    </>
    );
}
 
export default FeaturedProducts;