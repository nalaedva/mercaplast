import {  Box, Container, Typography, ButtonBase  } from '@mui/material';
import { styled } from '@mui/material/styles';


const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover .imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover .imageMarked': {
      opacity: 0,
    },
    '&:hover .imageTitle': {
      border: '4px solid currentColor',
    },
    '& .imageTitle': {
      position: 'relative',
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
  const images = [
    {
      url: 'https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Aseo',
      width: '40%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/03/14/07/bags-2576486_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Bazar',
      width: '20%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/21/08/42/pegs-2664512_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Hogar',
      width: '40%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2015/05/11/14/44/pencils-762555_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Libreria',
      width: '38%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/11/29/04/29/arts-and-crafts-1867323_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Regaleria',
      width: '38%',
    },
    {
      url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400',
      title: 'Shopping',
      width: '24%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2014/05/21/18/08/popsicle-sticks-350084_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Palos',
      width: '40%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/08/05/03/37/souvenir-7365879_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Plasticos',
      width: '20%',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/12/10/21/09/store-3867742_960_720.jpg?auto=format&fit=crop&w=400',
      title: 'Ofertas',
      width: '40%',
    },
  ];

const ProductCategories = () => {
    return ( 
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
      {/* <Typography variant="h4" marked="center" align="center" component="h2">
       Productos
      </Typography> */}
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
     );
}
 
export default ProductCategories;