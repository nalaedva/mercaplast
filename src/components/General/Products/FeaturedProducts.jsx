import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid, CircularProgress, Box } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css'

import { useState, useEffect } from 'react';


const FeaturedProducts = () => {

  const [items, setItems] = useState([])
  //Array de productos
  const products = [
    {
      id: 1,
      title: 'Rollo Aluminio 7mts',
      price: 2200, 
    },
    {
      id: 2,
      title: 'Aceite Mineral 1lt',
      price: 10200, 
    },
    {
      id: 3,
      title: 'Balde 10lts',
      price: 5200, 
    },
    {
      id: 4,
      title: 'Bolsa transparente',
      price: 6800, 
    }
  ]  

  const getProducts = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(products);
    },2000)
  })

  useEffect(() => {
    getProducts.then(rta => setItems(rta));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
    return (  
      
        items.length ?
  
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
          {
            items.map(item => (
            
            <Grid key={item.id} item xs={12} sm={4} md={3}>
              <Card  sx={{ maxWidth: 250, 
                  p: 1,
                  m: 2 }}>
                <ProductCard titulo={item.title} precio={item.price}/>
              </Card>
            </Grid> 
              ))
          }
      

        </Grid>
      
        
    </>
   :
   <Box sx={{ display: 'flex' ,
   justifyContent:'center',
  alignItems:'center',
  minHeight:'30vh'}}>
      <CircularProgress />
      <div>
      <p className='cargando'>Cargando items</p>
      </div>
      
    </Box>

    );
}
 
export default FeaturedProducts;