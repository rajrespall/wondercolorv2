import { Box, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '40px',
        margin: '0 auto',
        maxWidth: '98%'
      }}
    >
      <Box
        component="img"
        src="/logo_red.png"
        alt="Wondercolor Logo"
        sx={{
          height: '40px',
          width: 'auto'
        }}
      />

      <Button
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          color: '#fff',
          padding: '8px 16px',
          '&:hover': { 
            backgroundColor: 'rgba(255, 255, 255, 0.5)' 
          },
        }}
      >
        <ExitToAppIcon />
      </Button>
    </Box>
  );
}

export default Header;