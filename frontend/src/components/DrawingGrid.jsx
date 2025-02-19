import { Box } from '@mui/material';
import { useState } from 'react';
import useDrawingStore from '../store/DrawingStore';

function DrawingGrid() {
  const grid = useDrawingStore((state) => state.grid);
  const updateCell = useDrawingStore((state) => state.updateCell);
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
      }}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
            sx={{
              backgroundColor: cell,
              border: '0.25px solid #eee',
              cursor: 'pointer',
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