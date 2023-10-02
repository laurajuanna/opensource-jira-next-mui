import { Layout } from '@/components/layouts';
import { EntryList, NewEntry } from '@/components/ui';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

export default function Home() {
  return (
    <Layout title='Home - Opensource Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ padding: 0 }}>
              <NewEntry />
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ padding: 0 }}>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' sx={{ textAlign: 'center' }} />
            <CardContent sx={{ padding: 0 }}>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
