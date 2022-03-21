import React, { useState, useEffect } from "react";
import axios from "axios";
import { useEthContext } from "../../context/EthereumContext";
import { useSocketContext } from "../../context/SocketContext";

import { contract721ABI } from "../../contract/erc721_abi";
import { contract1155ABI } from "../../contract/erc1155_abi";

import RoomUser from "../../components/RoomUser";
import ModalContainer from "./modal";
import JoinContainer from "./join";
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
  RoomApproveButton,
  RoomButtonJoinContent,
  RoomButtons,
  RoomControls,
  RoomControlsTitle,
  RoomJoinButton,
  RoomStartButton,
  RoomUsers,
  RoomUserVs,
  RoomViewButton,
  RoomWaitButton,
  StatusImg,
  StatusView,
  StyledDashboard,
  StyledRoom,
  ValueView,
} from "./style";

// @import assets
import mark1 from "../../assets/img/mark1.png";
import mark2 from "../../assets/img/mark2.png";

import Identicon from "../../components/Identicon";
import { SERVER_URL } from "../../contract/server_url";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
const Dashboard = () => {
  const { currentAcc, web3 } = useEthContext();
  const { socket } = useSocketContext();
  const [nftdata, setNftdata] = useState([]);
  const [seleted, setSeleted] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = useState(false);
  const [join, setJoin] = useState(false);
  const [roomId, setRoomId] = useState("");
  useEffect(() => {
    getRoomData();
  }, []);
  const getRoomData = async () => {
    const room_data = await axios.get(`${SERVER_URL}/room/all`);
    setRooms(room_data.data);
  };
  useEffect(() => {
    if (currentAcc) {
      getCollectionData();
    }
  }, [currentAcc]);
  useEffect(() => {
    if (socket) {
      socket.on("create_success", (item) => {
        getRoomData();
      });
      socket.on("join_success", (item) => {
        getRoomData();
      });
      socket.on("ready_success", (item) => {
        getRoomData();
      });
    }
  }, [socket]);
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
    setJoin(false);
    setSeleted([]);
  };
  const onCreateNFT = async () => {
    const sendData = {};
    sendData.creator = currentAcc;
    sendData.nftdata = seleted;
    const price = seleted.reduce(
      (total, currentValue) =>
        (total = total + currentValue.last_sale.total_price / 10 ** 18),
      0
    );

    if (Number(price) > 0) {
      if (socket) {
        await socket.emit("createRoom", sendData);
        setOpen(false);
      }
    } else {
      alert("please check balance");
    }

    setSeleted([]);
  };
  const handleJoin = (item) => {
    setRoomId(item._id);
    setJoin(true);
  };
  const onJoinNFT = async () => {
    const sendData = {};
    sendData.visitor = currentAcc;
    sendData.nftdata = seleted;
    sendData.roomId = roomId;
    const price = seleted.reduce(
      (total, currentValue) =>
        (total = total + currentValue.last_sale.total_price / 10 ** 18),
      0
    );

    if (Number(price) > 0) {
      if (socket) {
        await socket.emit("joinRoom", sendData);
        setJoin(false);
      }
    } else {
      alert("please check balance");
    }
    setSeleted([]);
  };
  const onReady = async (item) => {
    if (item.creator && item.visitor) {
      if (currentAcc === item.creator) {
        for (let i = 0; i < item.nftinfo.length; i++) {
          if (item.nftinfo[i].asset_contract.schema_name === "ERC1155") {
            const contract = new web3.eth.Contract(
              contract1155ABI,
              item.nftinfo[i].asset_contract.address
            );
            await contract.methods
              .setApprovalForAll(item.visitor, true)
              .send({
                from: currentAcc,
              })
              .on("error", function (error) {
                console.log(error);
              });
          } else {
            const contract = new web3.eth.Contract(
              contract721ABI,
              item.nftinfo[i].asset_contract.address
            );
            await contract.methods
              .approve(item.visitor, item.nftinfo[i].token_id)
              .send({
                from: currentAcc,
              })
              .on("error", function (error) {
                console.log(error);
              });
          }
        }
        await socket.emit("ready_player", { item: item, creator: true });
      } else if (currentAcc === item.visitor) {
        for (let i = 0; i < item.visitinfo.length; i++) {
          if (item.visitinfo[i].asset_contract.schema_name === "ERC1155") {
            const contract = new web3.eth.Contract(
              contract1155ABI,
              item.visitinfo[i].asset_contract.address
            );
            await contract.methods
              .setApprovalForAll(item.visitor, true)
              .send({
                from: currentAcc,
              })
              .on("error", function (error) {
                console.log(error);
              });
          } else {
            const contract = new web3.eth.Contract(
              contract721ABI,
              item.visitinfo[i].asset_contract.address
            );
            await contract.methods
              .approve(item.visitor, item.visitinfo[i].token_id)
              .send({
                from: currentAcc,
              })
              .on("error", function (error) {
                console.log(error);
              });
          }
        }
        await socket.emit("ready_player", { item: item, visitor: true });
      }
    } else {
      alert("Pleayer is not ready");
    }
  };
  const onBattle = () => {
    alert("Battle Stadium.");
  };
  const onGetPrize = () => {
    alert("Get Prize.");
  };
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
                {rooms.map((item, key) => {
                  return (
                    <StyledRoom
                      key={key + 1}
                      flag={
                        item.visitor && item.creator
                          ? currentAcc === item.visitor ||
                            currentAcc === item.creator
                            ? true
                            : false
                          : item.creator
                          ? currentAcc === item.creator
                            ? true
                            : false
                          : false
                      }
                    >
                      <RoomUsers>
                        <RoomUser mark={mark1}>
                          <Identicon address={item.creator} size={4.5} />
                        </RoomUser>

                        <RoomUserVs>
                          <p>{"VS"}</p>
                        </RoomUserVs>
                        {item.visitor ? (
                          <RoomUser mark={mark2}>
                            <Identicon address={item.visitor} size={4.5} />
                          </RoomUser>
                        ) : (
                          <RoomUser />
                        )}
                      </RoomUsers>
                      <RoomControls>
                        <RoomControlsTitle>
                          {item.nftinfo.reduce(
                            (total, currentValue) =>
                              (total =
                                total +
                                currentValue.last_sale.total_price / 10 ** 18),
                            0
                          )}{" "}
                          ETH :{" "}
                          {item.visitinfo &&
                            item.visitinfo.reduce(
                              (total, currentValue) =>
                                (total =
                                  total +
                                  currentValue.last_sale.total_price /
                                    10 ** 18),
                              0
                            )}{" "}
                          ETH
                        </RoomControlsTitle>
                      </RoomControls>
                      {item.creatorReady && item.visitorReady ? (
                        item.winner ? (
                          item.winner === currentAcc ? (
                            <RoomButtons onClick={() => onGetPrize(item)}>
                              <RoomStartButton>
                                <RoomButtonJoinContent>
                                  Prize
                                </RoomButtonJoinContent>
                              </RoomStartButton>
                            </RoomButtons>
                          ) : currentAcc === item.visitor ||
                            currentAcc === item.creator ? (
                            "You are a loser."
                          ) : (
                            <RoomButtons>
                              <RoomViewButton>
                                <RoomButtonJoinContent>
                                  View
                                </RoomButtonJoinContent>
                              </RoomViewButton>
                            </RoomButtons>
                          )
                        ) : (
                          "No winner!"
                        )
                      ) : item.creator && item.visitor ? (
                        currentAcc === item.visitor ||
                        currentAcc === item.creator ? (
                          currentAcc === item.visitor ? (
                            item.visitorReady ? (
                              <RoomButtons>
                                <StatusView>
                                  <StatusImg src={mark1} />
                                  {item.creatorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <StatusView>
                                  <StatusImg src={mark2} />
                                  {item.visitorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <RoomApproveButton disabled>
                                  <RoomButtonJoinContent>
                                    Approved
                                  </RoomButtonJoinContent>
                                </RoomApproveButton>
                              </RoomButtons>
                            ) : (
                              <RoomButtons onClick={() => onReady(item)}>
                                <StatusView>
                                  <StatusImg src={mark1} />
                                  {item.creatorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <StatusView>
                                  <StatusImg src={mark2} />
                                  {item.visitorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <RoomStartButton>
                                  <RoomButtonJoinContent>
                                    Ready
                                  </RoomButtonJoinContent>
                                </RoomStartButton>
                              </RoomButtons>
                            )
                          ) : currentAcc === item.creator ? (
                            item.creatorReady ? (
                              <RoomButtons>
                                <StatusView>
                                  <StatusImg src={mark1} />
                                  {item.creatorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <StatusView>
                                  <StatusImg src={mark2} />
                                  {item.visitorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <RoomApproveButton disabled>
                                  <RoomButtonJoinContent>
                                    Approved
                                  </RoomButtonJoinContent>
                                </RoomApproveButton>
                              </RoomButtons>
                            ) : (
                              <RoomButtons onClick={() => onReady(item)}>
                                <StatusView>
                                  <StatusImg src={mark1} />
                                  {item.creatorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <StatusView>
                                  <StatusImg src={mark2} />
                                  {item.visitorReady ? (
                                    <AiOutlineCheckCircle
                                      size={30}
                                      color="#4cd964"
                                    />
                                  ) : (
                                    <AiOutlineCloseCircle
                                      size={30}
                                      color="#ff2d55 "
                                    />
                                  )}
                                </StatusView>
                                <RoomStartButton>
                                  <RoomButtonJoinContent>
                                    Ready
                                  </RoomButtonJoinContent>
                                </RoomStartButton>
                              </RoomButtons>
                            )
                          ) : (
                            "You are not connected"
                          )
                        ) : (
                          <RoomButtons>
                            <RoomViewButton>
                              <RoomButtonJoinContent>
                                View
                              </RoomButtonJoinContent>
                            </RoomViewButton>
                          </RoomButtons>
                        )
                      ) : item.creator && !item.visitor ? (
                        item.creator === currentAcc ? (
                          <RoomButtons>
                            <RoomWaitButton>
                              <RoomButtonJoinContent>
                                Wait
                              </RoomButtonJoinContent>
                            </RoomWaitButton>
                          </RoomButtons>
                        ) : (
                          <RoomButtons
                            onClick={() => {
                              handleJoin(item);
                            }}
                          >
                            <RoomJoinButton>
                              <RoomButtonJoinContent>
                                Join
                              </RoomButtonJoinContent>
                            </RoomJoinButton>
                          </RoomButtons>
                        )
                      ) : (
                        ""
                      )}
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
      <JoinContainer
        onSelectNFT={onSelectNFT}
        open={join}
        handleClose={handleClose}
        onJoinNFT={onJoinNFT}
        nftdata={nftdata}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
