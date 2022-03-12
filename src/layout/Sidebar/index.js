import React from "react";
import {
  ConnectButton,
  ConnectText,
  ConnectView,
  LogImg,
  LogoContainer,
  StyledSidebar,
} from "./style";
import logo from "../../assets/img/image.png";
import { useEthContext } from "../../context/EthereumContext";
// @import component
import { ToastContainer } from "react-toastify";

// @import style
import "react-toastify/dist/ReactToastify.css";
export default function Sidebar() {
  const { currentAcc, provider } = useEthContext();
  const handleConnectWallet = async () => {
    // if (Number(window.ethereum.chainId) === 1) {
    await provider.request({ method: `eth_requestAccounts` });
    // } else {
    //   toast.error("Please connect to mainnet", { theme: "dark" });
    // }
  };
  return (
    <>
      <ToastContainer />
      <StyledSidebar>
        <LogoContainer>
          <LogImg src={logo} />
        </LogoContainer>
        <ConnectView>
          <ConnectText>Please login to chat</ConnectText>
          <ConnectButton onClick={() => handleConnectWallet()}>
            {currentAcc && currentAcc
              ? `${currentAcc.substring(0, 6)}...${currentAcc.substring(
                  currentAcc.length - 6
                )}`
              : "ConnectWallet"}
          </ConnectButton>
        </ConnectView>
      </StyledSidebar>
    </>
  );
}
