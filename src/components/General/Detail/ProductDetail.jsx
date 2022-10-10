import { Card, CardMedia, CardActions, Box, Typography, Rating, ButtonGroup, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';



const ProductDetail = ({productName}) => {
    console.log(productName);

    const [Product, setProduct] = useState([]);

     const getProduct = async () => {
         try {
             let response = await axios.post('https://app-pos.azurewebsites.net/Services/Merchandise/Product/GetListOfProducts', {
                "Take": 1,
                "ContainsText": productName,
                "CompanyId": 2,
                "Skip": 0
            });

            console.log(response);

            setProduct(response.data.Entities[0]);
         } catch(err) {
             console.log(err);
         }
     }

     useEffect(() => {
         getProduct();
     },[])

     const [counter, setCounter] = useState (0);


    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };
 
    //decrease counter
    const decrease = () => {
        if (counter > 0) {
          setCounter(count => count - 1);
        }
    };

    const onAdd = (e) => {
        console.log('Click')
    };

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
            src="https://www.desechablesmonterrey.com/wp-content/uploads/2014/11/PACTIVM51-0032.jpg"
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
                <Typography>El id de este producto es{Product.Id}</Typography>
                <Typography  fontWeight="bold">
                    {Product.Name}
                </Typography>

                <Rating />

                <Typography variant="body2" color="text.secondary">
                    $ {Product.SalesPrice}
                </Typography>

                <Box
                    sx={{
                        pt: 2
                        }}
                >
                    <Typography variant="body2">
                        {Product.Description}
                    </Typography>
                </Box>

                <ButtonGroup 
                    size="small" 
                    aria-label="small outlined button group"
                    sx={{
                        pt: 2
                        }}
                >
                    <Button onClick={decrease}>-</Button>
                    <Button disabled> {counter} </Button>
                    <Button onClick={increase}>+</Button>
                </ButtonGroup>
                
                <CardActions  
                    sx={{ 
                        pt: 4,
                        mx: 'auto',
                        pl: 0,
                     }}
                >
                    
                    <Button variant="contained" size="small" color="primary" style={{textTransform: 'none'}}
                    
                    onClick={onAdd}
                    >
                    Agregar al carrito
                    </Button>
                </CardActions>
            </Box>
        </Card>
        </>
       
     );
}
 
export default ProductDetail;