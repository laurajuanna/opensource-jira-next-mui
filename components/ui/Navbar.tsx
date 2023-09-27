import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { useContext } from 'react';
import { UIContext } from '@/context';

export const Navbar = () => {

    const { openSidemenu } = useContext(UIContext);

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton sx={{ color: 'white' }} size='large' onClick={openSidemenu}>
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant='h6'>Opensource Jira App</Typography>
            </Toolbar>
        </AppBar>
    )
}
