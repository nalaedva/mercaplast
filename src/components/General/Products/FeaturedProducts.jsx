import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid, CircularProgress, Box } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css'
import axios from 'axios';

import { useState, useEffect } from 'react';


const FeaturedProducts = () => {

  const [listProducts, setListProducts] = useState([]);

  const getProducts = async () => {
      try {
          let response = await axios.post('https://app-pos.azurewebsites.net/Services/Merchandise/Product/GetListOfProducts', {
             "Take": 4,
             "CompanyId": 2,
             "Skip": 0
         });

         console.log(response);

         setListProducts(response.data.Entities);
      } catch(err) {
          console.log(err);
      }
  }

  useEffect(() => {
      getProducts();
  },[])

  
    return (  
      
        listProducts.length ?
  
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
            listProducts.map(item => (
            
            <Grid key={item.id} item xs={12} sm={4} md={3}>
              <Card  sx={{ maxWidth: 250, 
                  p: 1,
                  m: 2 }}>
                <ProductCard product={item}/>
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