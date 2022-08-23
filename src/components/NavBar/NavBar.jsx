import { AppBar, Grid, Toolbar,  Typography, Tabs, Tab, Button, Box} from '@mui/material';
import logo from "../../assets/images/logo.png"
import SearchIcon from '@mui/icons-material/Search';



const NavBar = () => {

  
  return (  

        <AppBar  sx={{ background: 'rgba(0,0,58)' }}>
          <Toolbar>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={3}>
                <Toolbar>
                  <img src={logo} alt="logo" />
                </Toolbar>
              </Grid>

              <Grid item xs={4} display="flex"
                    justifyContent="center"
                    alignItems="center">      
                <Tab label="Buscar" />
                <SearchIcon />
              </Grid>

              <Grid item xs={2} />
              
              <Grid item xs={3}>
                <Box display="flex">
                  <Button sx={{ marginLeft: "auto", color: "black", background: 'white' }} variant="contained">Login</Button>
                  <Button sx={{ marginLeft: 1 , color: "black", background: 'white'}} variant="contained">Items (0)</Button>
                </Box>
              </Grid>

            </Grid>
          </Toolbar>

          <Toolbar>
            <Grid  container
                   spacing={0}
                   direction="column"
                   alignItems="center"
                   justifyContent="center"
                  >
            <Grid item xs={12}>
                <Tabs  textColor="inherit">
                  <Tab label="Aseo" />
                  <Tab label="Bazar" />
                  <Tab label="Hogar" />
                  <Tab label="Libreria" />
                  <Tab label="Regaleria" />
                  <Tab label="Ofertas" />
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      
    );
}
 
export default NavBar;