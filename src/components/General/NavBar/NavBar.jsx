import { useContext } from 'react';

import { AppBar, Grid, Toolbar, Button, Box, Link} from '@mui/material';
import logo from "../../../assets/images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './DrawerComp';
import WidgetCart from '../WidgetCart/WidgetCart'

import {useState} from 'react';
import {Store} from '../../../store';



const NavBar = ({action}) => {
 
  const [data, setData] = useContext(Store);
  console.log(data);

  const [showWidgetCart, setShowWidgetCart] = useState(false);

 
  const openWidgetCart = () => {
    setShowWidgetCart(!showWidgetCart);
  }
 

  return (  
    <> 
      <Box >
        <AppBar sx={{position:"sticky", color:'inherit'
        }}>
          <Toolbar sx={{ background: 'rgba(0,0,58)' }}>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={3}>
                <Toolbar>
                  <Link href='/'>
                    <Box>
                    <img src={logo} alt="logo" />
                    </Box>
                  </Link>
                  
                </Toolbar>
              </Grid>

              <Grid item xs={6} display="flex"
                    alignItems="center"
                    >   
                    <Button sx={{ color: "black", background: 'white', width: 500 }} variant="string"> 
                    <SearchIcon />Buscar
                    </Button>   
              </Grid>

             
              
              <Grid item xs={3}>
                <Box display="flex" >
                  <Button sx={{ marginLeft: "auto", color: "black", background: 'white' }} variant="contained">Login</Button>
                  
                  <Button sx={{ marginLeft: 1 , color: "black", background: 'white'}} variant="contained"

                  // action={openWidgetCart}
                  onClick={openWidgetCart}
                  >Items
                  <span>({data.cantidad})</span>
                  </Button>
                </Box>
              </Grid>

              <WidgetCart show={showWidgetCart} />
              
            </Grid>
          </Toolbar>
        </AppBar>
        </Box>
        </>
    );
}
 
export default NavBar;