import { Box, Grid } from '@mui/material';
import Header from './components/Header';
import ColorPalette from './components/ColorPalette';
import DrawingGrid from './components/DrawingGrid';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#5ca300',
        padding: { xs: 2, sm: 4 }, 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Header />

      <Grid 
        container 
        spacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{ 
          width: { xs: '95%', sm: '98%' }, 
          marginTop: { xs: 1, sm: -5 },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap'
        }}
      >
        <Grid 
          item 
          xs={4} 
          sx={{
            marginTop: { xs: 3, sm: 6 } 
          }}
        >
          <ColorPalette />
        </Grid>

        <Grid 
          item 
          xs={7}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: { xs: 2, sm: 8 },
            marginTop: { xs: 1, sm: 2 } 
          }}
        >
          <DrawingGrid />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;