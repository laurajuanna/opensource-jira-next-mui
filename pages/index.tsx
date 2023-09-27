import { Layout } from '@/components/layouts';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

export default function Home() {
  return (
    <Layout title='Home - Opensource Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' sx={{ textAlign: 'center' }} />
            <CardContent>
              Probando
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' sx={{ textAlign: 'center' }} />
            <CardContent>
              Probando
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' sx={{ textAlign: 'center' }} />
            <CardContent>
              Probando
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
