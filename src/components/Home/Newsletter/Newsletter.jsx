import {  Box, Container, Paper, Grid, Button, Typography } from '@mui/material';

const Newsletter = () => {
    return ( 
        <Box
        sx={{
            display: 'flex',
            background: 'rgba(209,222,222)'
          }}
        >
            <Container maxWidth="sm">
                <Box sx={{ mt: 7, mb: 12 }}>
                    <Paper
                    background="light"
                    sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6} }}
                    >
                        <Grid item xs={12} sx={{ justifyContent: "center" }} container>
                            <Typography
                            variant = "h5"
                            color = "primary"
                            sx={{
                              fontWeight: '500', 
                              textAlign: 'center',
                              fontSize: 18,
                              fontFamily: 'Poppins',
                              textTransform: 'uppercase',
                            
                            }}
                            >
                                Suscribite!
                            </Typography>
                            <Grid item xs={12} sx={{ justifyContent: "center" }} >
                            <Typography
                            sx={{
                                fontWeight: '400', 
                                textAlign: 'center',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                
                              }}
                            >
                                Dejanos tu e-mail y recibi las mejores ofertas
                            </Typography>
                            </Grid>
                           
                            <Button sx={{  background: 'white', width: 500 , m:2}} variant="outlined"> 
                                E-mail
                            </Button>   
                            <Button variant="contained" sx={{ color: "primary"}} > 
                                Enviar
                            </Button>   
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </Box>
     );
}
 
export default Newsletter;