import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomUser from "../../components/RoomUser";
import ModalContainer from "./modal";
import {
  CountDesc,
  CountText,
  CreateAction,
  CreateView,
  DashboardContainer,
  DashboardWrapper,
  DashHeader,
  GameView,
  HistoryActions,
  HistoryView,
  RoomButtonJoinContent,
  RoomButtons,
  RoomControls,
  RoomControlsTitle,
  // RoomCountDown,
  // RoomCountDownBack,
  // RoomCountDownBackImage,
  // RoomCountDownContainer,
  // RoomCountDownImage,
  RoomJoinButton,
  RoomUsers,
  RoomUserVs,
  StyledDashboard,
  StyledRoom,
  ValueView,
} from "./style";

// @import assets
import mark1 from "../../assets/img/mark1.png";
import mark2 from "../../assets/img/mark2.png";
// import bigback from "../../assets/img/bigback.svg";
// import bigmark1 from "../../assets/img/bigmark1.png";
// import bigmark2 from "../../assets/img/bigmark2.png";
import { useEthContext } from "../../context/EthereumContext";
import Identicon from "../../components/Identicon";
const Dashboard = () => {
  const { currentAcc } = useEthContext();
  const [nftdata, setNftdata] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const getCollectionData = async () => {
      const { data } = await axios.get(
        `https://api.opensea.io/api/v1/assets?owner=${currentAcc}`
      );
      // const { data } = await axios.get(
      //   `https://api.opensea.io/api/v1/assets?owner=0x97be8adc37c81b32083da0d831f14e31a2a24168`
      // );

      data.assets.map((element) => {
        if (element.last_sale == null) {
          element.last_sale = { total_price: 0 };
        }
      });

      await setNftdata(data.assets);
    };
    if (currentAcc) {
      getCollectionData();
    }
  }, [currentAcc]);
  return (
    <DashboardWrapper>
      <StyledDashboard>
        <DashboardContainer>
          {currentAcc ? (
            <>
              <DashHeader>
                <ValueView>
                  <CountText>200</CountText>
                  <CountDesc>Online Users</CountDesc>
                </ValueView>
                <GameView>
                  <CountText>1.25k</CountText>
                  <CountDesc>Total Users</CountDesc>
                </GameView>
                <HistoryView>
                  <HistoryActions onClick={() => handleOpen()}>
                    <CreateAction>Create</CreateAction>
                  </HistoryActions>
                </HistoryView>
              </DashHeader>
              <CreateView>
                <StyledRoom>
                  <RoomUsers>
                    <RoomUser mark={mark1}>
                      <Identicon address={currentAcc} size={4.5} />
                    </RoomUser>

                    <RoomUserVs>
                      <p>{"VS"}</p>
                    </RoomUserVs>
                    <RoomUser mark={mark2}>
                      <Identicon
                        address={"0x17b546D3179ca33b542eD6BD9fE6656fb5D5b70E"}
                        size={4.5}
                      />
                    </RoomUser>
                  </RoomUsers>
                  {/* <RoomCountDownContainer>
                <RoomCountDown>
                  <RoomCountDownBack>
                    <RoomCountDownBackImage src={bigmark1} />
                  </RoomCountDownBack>
                  <RoomCountDownImage src={bigback} />
                </RoomCountDown>
              </RoomCountDownContainer> */}

                  <RoomControls>
                    <RoomControlsTitle>
                      {"5"} ETH~{"6"} ETH
                    </RoomControlsTitle>
                  </RoomControls>
                  <RoomButtons>
                    <RoomJoinButton>
                      <RoomButtonJoinContent>Join</RoomButtonJoinContent>
                    </RoomJoinButton>
                  </RoomButtons>
                </StyledRoom>
              </CreateView>
            </>
          ) : (
            "Please connect your wallet"
          )}
        </DashboardContainer>
      </StyledDashboard>
      <ModalContainer open={open} handleClose={handleClose} nftdata={nftdata} />
    </DashboardWrapper>
  );
};

export default Dashboard;
