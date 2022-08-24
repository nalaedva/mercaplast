import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

const DrawerComp = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Aseo</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                </Drawer>
            <IconButton>
                <MenuRoundedIcon sx={{color: "white"}}/>
            </IconButton>
        </>
     );
}
 
export default DrawerComp;