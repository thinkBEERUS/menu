import { useState } from "react";
import { Modal, Box, Typography, IconButton, Slider } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const images = [
  "https://via.placeholder.com/250x200?text=Image+1",
  "https://via.placeholder.com/250x200?text=Image+2",
  "https://via.placeholder.com/250x200?text=Image+3",
];

function ItemModal({ modal, setModal, selectedItem }) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          bgcolor: "#333",
          color: "#fff",
          boxShadow: 24,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0, color: "#fff" }}
          onClick={() => setModal(false)}
        >
          <CloseRoundedIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {selectedItem.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {selectedItem.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <img
            src={images[sliderValue]}
            alt="Slider"
            width="100%"
            style={{ maxWidth: "400px" }}
          />
          <Slider
            sx={{ mt: 2 }}
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={images.length - 1}
            step={1}
            marks
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default ItemModal;
