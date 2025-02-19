import { Box } from '@mui/material';
import useDrawingStore from '../store/DrawingStore';

function DrawingGrid() {
  const grid = useDrawingStore((state) => state.grid);
  const updateCell = useDrawingStore((state) => state.updateCell);

  return (
    <Box
      sx={{
        width: 700, 
        height: 500, 
        backgroundColor: 'white',
        border: '2px solid black',
        display: 'grid',
        gridTemplateColumns: 'repeat(40, 1fr)',
        gridTemplateRows: 'repeat(32, 1fr)',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            onClick={() => updateCell(rowIndex, colIndex)}
            sx={{
              backgroundColor: cell,
              border: '0.25px solid #eee',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          />
        ))
      )}
    </Box>
  );
}

export default DrawingGrid;