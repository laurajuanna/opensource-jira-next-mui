import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar, Sidebar } from '../ui';

interface Props {
    children: React.ReactNode
    title?: string;
}

export const Layout = ({ title = 'Opensource Jira App', children }: Props) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px' }} >
                {children}
            </Box>

        </Box>
    )
}
