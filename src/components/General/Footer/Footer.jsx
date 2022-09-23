import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from '@mui/material';
import {
    Security,
    Info
} from '@mui/icons-material';

const Footer = () => <>
       
        <AppBar sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    width: '100%'
    }}
    position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center", background: 'rgba(0,0,58)' }}>
                <Typography 
                sx={{
                    fontWeight: '300', 
                    textAlign: 'center',
                    fontSize: 11,
                    fontFamily: 'Poppins',
                    color: 'white'                            
                  }}
                >Made by 
                <Link> Valeria Velazquez </Link> | ©2022</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;