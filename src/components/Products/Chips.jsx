import { Grid,  Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';



const Chips = () => {

  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (  
  <>
     <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider'}}>    
        <Grid  container
               spacing={0}
               direction="column"
               alignItems="center"
               justifyContent="center"
              >
        <Grid item xs={12}>
            <Tabs TabIndicatorProps={{style: {background:'rgba(0,0,58)'}}} 
                  textColor="inherit" 
                  value={value} 
                  onChange={handleChange}>
              <Tab value="one" label="Aseo" />
              <Tab value="two" label="Bazar" />
              <Tab value="three" label="Hogar" />
              <Tab value="four" label="Libreria" />
              <Tab value="five" label="Regaleria" />
              <Tab value="six" label="Ofertas" />
            </Tabs>
          </Grid>
        </Grid>
        </Box>
  </>
  );
}
 
export default Chips;

