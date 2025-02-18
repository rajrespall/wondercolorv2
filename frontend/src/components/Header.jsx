import { Box, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
  return (
    <>
      <Box
        component="img"
        src="/logo_red.png"
        alt="Wondercolor Logo"
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          height: '40px', // Adjust this value based on your logo size
          width: 'auto'
        }}
      />

      <Button
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 4,
          color: '#fff',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
        }}
      >
        <ExitToAppIcon />
      </Button>
    </>
  );
}

export default Header;