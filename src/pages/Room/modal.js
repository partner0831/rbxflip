import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CloseAction, CreateAction, ModalBtnView } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "100%",
  bgcolor: "#1d1f32",
  border: "2px solid #3498db",
  boxShadow: 24,
  p: 4,
};

const ModalContainer = ({ handleClose, open, nftdata }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Selete the NFT
          </Typography>
          {nftdata.length <= 0 ? "You don't have any NFTs" : "asdf"}

          <ModalBtnView>
            <CreateAction>Create</CreateAction>
            <CloseAction onClick={handleClose}>Close</CloseAction>
          </ModalBtnView>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalContainer;
