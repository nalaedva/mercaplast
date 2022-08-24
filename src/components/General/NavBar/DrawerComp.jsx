import { Drawer, 
         List, 
         ListItemButton, 
         ListItemIcon, 
         ListItemText,
         PaperProps
         } from '@mui/material'
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

const DrawerComp = () => {
    const [open, setOpen] = useState(false);
    return ( 
        <>
            <Drawer PaperProps={{
                sx:{ backgroundColor: "rgba(0,0,58)"}
            }}
            
                open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText sx={{ color: "white"}}>Aseo</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                </Drawer>
            <IconButton onClick={()=>setOpen(!open)}>
                <MenuRoundedIcon sx={{color: "black"}}/>
            </IconButton>
        </>
     );
}
 
export default DrawerComp;