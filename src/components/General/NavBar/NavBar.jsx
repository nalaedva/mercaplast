import { AppBar, Grid, Toolbar, Button, Box} from '@mui/material';
import logo from "../../../assets/images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './DrawerComp';
import WidgetCart from '../WidgetCart/WidgetCart'



const NavBar = () => {


  return (  

        <AppBar sx={{position:"sticky", color:'inherit'}}>
          <Toolbar sx={{ background: 'rgba(0,0,58)' }}>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={3}>
                <Toolbar>
                  <img src={logo} alt="logo" />
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
                <Box display="flex">
                  <Button sx={{ marginLeft: "auto", color: "black", background: 'white' }} variant="contained">Login</Button>
                  <Button sx={{ marginLeft: 1 , color: "black", background: 'white'}} variant="contained">Items
                  <span>(0)</span>
                  </Button>
                </Box>
              </Grid>

              <WidgetCart />
            </Grid>
          </Toolbar>
        </AppBar>
      
    );
}
 
export default NavBar;