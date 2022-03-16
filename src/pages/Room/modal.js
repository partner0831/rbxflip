import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CloseAction, CreateAction, ModalBtnView, NFTView } from "./style";
import { useEthContext } from "../../context/EthereumContext";

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

const ModalContainer = ({
  handleClose,
  open,
  nftdata,
  onSelectNFT,
  onCreateNFT,
}) => {
  const { currentAcc } = useEthContext();
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

          {currentAcc && currentAcc
            ? nftdata.length > 0
              ? nftdata
                  .sort((a, b) => {
                    if (a.last_sale && b.last_sale) {
                      return b.last_sale.total_price - a.last_sale.total_price;
                    }
                  })
                  .map((item, key) => (
                    <NFTView key={key + 1}>
                      <div>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            onSelectNFT(item, e.target.checked);
                          }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span>
                        {item.last_sale
                          ? item.last_sale.total_price / 10 ** 18
                          : 0}{" "}
                        ETH
                      </span>
                    </NFTView>
                  ))
              : "You don't have any NFT"
            : ""}

          <ModalBtnView>
            <CreateAction onClick={onCreateNFT}>Create</CreateAction>
            <CloseAction onClick={handleClose}>Close</CloseAction>
          </ModalBtnView>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalContainer;
