import { Modal, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { images } from '../constants/images';
import useDrawingStore from '../store/DrawingStore';

function BackgroundModal({ open, onClose }) {
  const setBackgroundImage = useDrawingStore((state) => state.setBackgroundImage);

  const handleImageSelect = (guideUrl) => {
    setBackgroundImage(guideUrl);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="background-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: 'auto'
        }}
      >
        <Typography id="background-modal-title" variant="h6" component="h2" mb={2}>
          Select Background Image
        </Typography>
        <ImageList cols={4} gap={8}>
          {images.map((item) => (
            <ImageListItem 
              key={item.id}
              onClick={() => handleImageSelect(item.guideUrl)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': { opacity: 0.8 }
              }}
            >
              <img
                src={item.url}
                alt={item.name}
                loading="lazy"
                style={{ 
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 8
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Modal>
  );
}

export default BackgroundModal;