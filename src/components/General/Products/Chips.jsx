import { Grid,  Tabs, Tab, Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import DrawerComp from '../NavBar/DrawerComp';
import { useTheme } from '@mui/material';



const Chips = () => {

  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(isMatch);

  const menuItems = [
    {
      texto: 'Aseo',
    },
    {
      texto: 'Bazar',
    },
    {
      texto: 'Hogar',
    },
    {
      texto: 'Libreria',
    },
    {
      texto: 'Regaleria',
    },
    {
      texto: 'Ofertas',
    }
  ]

  return (  
  <>
    
     <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider'}}> 
    
        { isMatch ? <>
          <DrawerComp />   
        </> : 
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
              
              {
              menuItems.map((section, index) => <Tab key={index} value="one" label={section.texto} />) 
              }
              
              {/* <Tab value="one" label="Aseo" />
              <Tab value="two" label="Bazar" />
              <Tab value="three" label="Hogar" />
              <Tab value="four" label="Libreria" />
              <Tab value="five" label="Regaleria" />
              <Tab value="six" label="Ofertas" />
               */}
            </Tabs>
          </Grid>
        </Grid>
        }
        </Box>
  </>
  );
}
 
export default Chips;

