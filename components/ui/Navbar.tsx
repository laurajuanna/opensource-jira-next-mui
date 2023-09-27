import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton sx={{ color: 'white' }} size='large'>
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant='h6'>Opensource Jira App</Typography>
            </Toolbar>
        </AppBar>
    )
}
