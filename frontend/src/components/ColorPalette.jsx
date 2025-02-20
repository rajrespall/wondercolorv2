import { Box, IconButton, Button, Stack } from '@mui/material';
import useDrawingStore from '../store/DrawingStore';
import { useState } from 'react';
import BackgroundModal from './BackgroundModal';

function ColorPalette() {
  const colors = useDrawingStore((state) => state.colors);
  const selectedColor = useDrawingStore((state) => state.selectedColor);
  const setSelectedColor = useDrawingStore((state) => state.setSelectedColor);
  const clearGrid = useDrawingStore((state) => state.clearGrid);
  const grid = useDrawingStore((state) => state.grid);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    const drawingData = JSON.stringify(grid);
    const blob = new Blob([drawingData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wondercolor-drawing.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 450,
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: 3,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '300px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1,
          padding: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
        }}
      >
        {colors.map((color) => (
          <IconButton
            key={color}
            onClick={() => setSelectedColor(color)}
            sx={{
              width: '45px',
              height: '45px',
              backgroundColor: color,
              border: selectedColor === color ? '3px solid #333' : '1px solid #ccc',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: color,
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>

      <Stack direction="row" spacing={2}>
        <Button 
          variant="contained" 
          onClick={() => setIsModalOpen(true)}
          sx={{
            backgroundColor: '#2196F3',
            '&:hover': { backgroundColor: '#1976D2' }
          }}
        >
          Select Background
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSave}
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': { backgroundColor: '#45a049' }
          }}
        >
          Save Drawing
        </Button>
        <Button 
          variant="contained" 
          onClick={clearGrid}
          sx={{
            backgroundColor: '#f44336',
            '&:hover': { backgroundColor: '#da190b' }
          }}
        >
          Clear Grid
        </Button>
      </Stack>

      <BackgroundModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </Box>
  );
}

export default ColorPalette;