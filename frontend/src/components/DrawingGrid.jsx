import { Box } from '@mui/material';
import { useState } from 'react';
import useDrawingStore from '../store/DrawingStore';

function DrawingGrid() {
  const grid = useDrawingStore((state) => state.grid);
  const updateCell = useDrawingStore((state) => state.updateCell);
  const backgroundImage = useDrawingStore((state) => state.backgroundImage);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (rowIndex, colIndex) => {
    setIsDrawing(true);
    updateCell(rowIndex, colIndex);
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (isDrawing) {
      updateCell(rowIndex, colIndex);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <Box
      sx={{
        width: 700,
        height: 500,
        backgroundColor: 'white',
        border: '2px solid black',
        display: 'grid',
        gridTemplateColumns: 'repeat(56, 1fr)',
        gridTemplateRows: 'repeat(40, 1fr)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {backgroundImage && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
              width: 'auto',
              height: '100%',
              objectFit: 'contain',
              opacity: 0.5,
              filter: 'contrast(1.2) brightness(1.1)',
            }
          }}
        >
          <img src={backgroundImage} alt="Background" />
        </Box>
      )}
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
            sx={{
              backgroundColor: cell === '#FFFFFF' ? 'transparent' : cell,
              border: '0.25px solid #eee',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                opacity: 0.8,
              },
              userSelect: 'none',
            }}
          />
        ))
      )}
    </Box>
  );
}

export default DrawingGrid;