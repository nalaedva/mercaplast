import { AppBar, Grid, Toolbar, Button, Box, Link, Typography} from '@mui/material';

const FreeShipping = () => {
    return ( 
        <>
            <Box>
                <AppBar sx={{position:"static", background: 'rgba(251,133,0)'}}>
                    <Grid sx={{ placeItems: "center" }} container>
                        <Grid item xs={12}>
                        <Typography 
                        sx={{
                            fontWeight: '200', 
                            textAlign: 'center',
                            fontSize: 12,
                            fontFamily: 'Poppins',
                            m: 1                            
                          }}
                        >
                                Envío gratis desde $20000 | 3 cuotas sin interés
                        </Typography>
                        </Grid>
                    </Grid>
                </AppBar>
            </Box>
        </>
     );
}
 
export default FreeShipping;