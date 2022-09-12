import { Card, CardMedia, CardActions, Box, Typography, Rating, ButtonGroup, Button } from '@mui/material';

const ProductDetail = ({product}) => {
    console.log(product);

    return ( 
        <>
        <Card
            variant="outlined"
            sx={{
              display: 'flex',
              p: 1,
              flexDirection: {
                xs: 'column', // mobile
                sm: 'row', // tablet and up
              },
            }}
        >
            <CardMedia 
            component="img"
            width="300"
            height="300"
            alt="Product"
            src={product.foto}
            sx={{
              borderRadius: 0.5,
              width: { xs: '100%', sm: 300 },
              mr: { sm: 1.5 },
              mb: { xs: 1.5, sm: 0 },
            }}
            />
            <Box
                sx={{  ml: 2 }}
            >
                <Typography  fontWeight="bold">
                    {product.nombre}
                </Typography>

                <Rating />

                <Typography variant="body2" color="text.secondary">
                    $ {product.precio}
                </Typography>

                <Box
                    sx={{
                        pt: 2
                        }}
                >
                    <Typography variant="body2">
                        {product.descripcion}
                    </Typography>
                </Box>

                <ButtonGroup 
                    size="small" 
                    aria-label="small outlined button group"
                    sx={{
                        pt: 2
                        }}
                >
                    <Button>+</Button>
                    <Button disabled> 1 </Button>
                    <Button>-</Button>
                </ButtonGroup>
                
                <CardActions  
                    sx={{ 
                        pt: 4,
                        mx: 'auto',
                        pl: 0,
                     }}
                >
                    <Button variant="contained" size="small" color="primary" style={{textTransform: 'none'}}>
                    Agregar al carrito
                    </Button>
                </CardActions>
            </Box>
        </Card>
        </>
       
     );
}
 
export default ProductDetail;