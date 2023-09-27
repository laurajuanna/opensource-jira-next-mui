import {
    Drawer, Box, Typography,
    List, ListItem, ListItemButton, ListItemIcon,
    ListItemText, Divider
} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {

    return (
        <Drawer anchor='left' open onClose={() => console.log('cerrando')}>
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '15px', paddingBottom: 0 }}>
                    <Typography variant='h5'>Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem key={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CloudQueueIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
            </Box>
        </Drawer>
    )
}
