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
// import mark2 from "../../assets/img/mark2.png";
// import bigback from "../../assets/img/bigback.svg";
// import bigmark1 from "../../assets/img/bigmark1.png";
// import bigmark2 from "../../assets/img/bigmark2.png";
import { useEthContext } from "../../context/EthereumContext";
import { useSocketContext } from "../../context/SocketContext";
import Identicon from "../../components/Identicon";
import { SERVER_URL } from "../../contract/server_url";
const Dashboard = () => {
  const { currentAcc } = useEthContext();
  const { socket } = useSocketContext();
  const [nftdata, setNftdata] = useState([]);
  const [seleted, setSeleted] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getRoomData();
  }, []);
  const getRoomData = async () => {
    const room_data = await axios.get(`${SERVER_URL}/room/all`);
    console.log(room_data.data);
    setRooms(room_data.data);
  };
  useEffect(() => {
    if (currentAcc) {
      getCollectionData();
    }
  }, [currentAcc]);
  const getCollectionData = async () => {
    // const { data } = await axios.get(
    //   `https://api.opensea.io/api/v1/assets?owner=${currentAcc}`
    // );
    const { data } = await axios.get(
      `https://api.opensea.io/api/v1/assets?owner=0x97be8adc37c81b32083da0d831f14e31a2a24168`
    );

    data.assets.map((element) => {
      if (element.last_sale == null) {
        element.last_sale = { total_price: 0 };
      }
    });

    await setNftdata(data.assets);
  };
  const onSelectNFT = (data, flag) => {
    if (flag) {
      const filData = seleted.filter((item) => item.id === data.id);
      if (!filData.length > 0) {
        let lists = seleted;
        lists.push(data);
        setSeleted(lists);
      }
    } else {
      const filData = seleted.filter((item) => item.id !== data.id);
      setSeleted(filData);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSeleted([]);
  };
  const onCreateNFT = async () => {
    setOpen(false);
    const sendData = {};
    sendData.creator = currentAcc;
    sendData.nftdata = seleted;

    if (socket) {
      await socket.emit("createRoom", sendData);
    }
    setSeleted([]);
  };
  useEffect(() => {
    if (socket) {
      socket.on("create_success", (item) => {
        console.log(item);
        getRoomData();
      });
    }
  }, [socket]);
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
              </DashHeader>{" "}
              <CreateView>
                {rooms.map((item, key) => {
                  return (
                    <StyledRoom key={key + 1}>
                      <RoomUsers>
                        <RoomUser mark={mark1}>
                          <Identicon address={item.creator} size={4.5} />
                        </RoomUser>

                        <RoomUserVs>
                          <p>{"VS"}</p>
                        </RoomUserVs>
                        <RoomUser />
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
                          {item.nftinfo.reduce(
                            (total, currentValue) =>
                              (total =
                                total +
                                currentValue.last_sale.total_price / 10 ** 18),
                            0
                          )}{" "}
                          ETH
                        </RoomControlsTitle>
                      </RoomControls>
                      <RoomButtons>
                        <RoomJoinButton>
                          <RoomButtonJoinContent>Join</RoomButtonJoinContent>
                        </RoomJoinButton>
                      </RoomButtons>
                    </StyledRoom>
                  );
                })}
              </CreateView>
            </>
          ) : (
            "Please connect your wallet"
          )}
        </DashboardContainer>
      </StyledDashboard>
      <ModalContainer
        onSelectNFT={onSelectNFT}
        open={open}
        handleClose={handleClose}
        onCreateNFT={onCreateNFT}
        nftdata={nftdata}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
