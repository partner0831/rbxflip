import React from "react";
import RoomUser from "../../components/RoomUser";
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
  RoomCountDown,
  RoomCountDownBack,
  RoomCountDownBackImage,
  RoomCountDownContainer,
  RoomCountDownImage,
  RoomJoinButton,
  RoomUsers,
  RoomUserVs,
  StyledDashboard,
  StyledRoom,
  StyledSubNav,
  SubAction,
  SubActionGroup,
  SubActionIcon,
  SubActionTitle,
  // SubSignin,
  ValueView,
} from "./style";
import mark1 from "../../assets/img/mark1.png";
import mark2 from "../../assets/img/mark2.png";
import bigback from "../../assets/img/bigback.svg";
import bigmark1 from "../../assets/img/bigmark1.png";
import bigmark2 from "../../assets/img/bigmark2.png";
import { useEthContext } from "../../context/EthereumContext";
import Identicon from "../../components/Identicon";
const Dashboard = () => {
  const { currentAcc } = useEthContext();
  return (
    <DashboardWrapper>
      <StyledSubNav>
        <SubActionGroup>
          <SubAction>
            <SubActionIcon></SubActionIcon>
            <SubActionTitle>Coinflip</SubActionTitle>
          </SubAction>
          <SubAction>
            <SubActionIcon></SubActionIcon>
            <SubActionTitle>Jackpot</SubActionTitle>
          </SubAction>
          <SubAction>
            <SubActionIcon></SubActionIcon>
            <SubActionTitle>Rock Paper Scissors</SubActionTitle>
          </SubAction>
          <SubAction>
            <SubActionIcon></SubActionIcon>
            <SubActionTitle>Claims</SubActionTitle>
          </SubAction>
        </SubActionGroup>
        {currentAcc && <Identicon address={currentAcc} size={2.5} />}
      </StyledSubNav>
      <StyledDashboard>
        <DashboardContainer>
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
              <HistoryActions>
                {currentAcc ? (
                  <CreateAction>Create</CreateAction>
                ) : (
                  "After connect wallet you can create the room."
                )}
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
              <RoomCountDownContainer>
                <RoomCountDown>
                  <RoomCountDownBack>
                    <RoomCountDownBackImage src={bigmark1} />
                  </RoomCountDownBack>
                  <RoomCountDownImage src={bigback} />
                </RoomCountDown>
              </RoomCountDownContainer>

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
            <StyledRoom>
              <RoomUsers>
                <RoomUser mark={mark2}>
                  <Identicon
                    address={"0x17b546D3179ca33b542eD6BD9fE6656fb5D5b70E"}
                    size={4.5}
                  />
                </RoomUser>
                <RoomUserVs>
                  <p>{"VS"}</p>
                </RoomUserVs>
                <RoomUser mark={mark1}>
                  <Identicon address={currentAcc} size={4.5} />
                </RoomUser>
              </RoomUsers>
              <RoomCountDownContainer>
                <RoomCountDown>
                  <RoomCountDownBack>
                    <RoomCountDownBackImage src={bigmark2} />
                  </RoomCountDownBack>
                  <RoomCountDownImage src={bigback} />
                </RoomCountDown>
              </RoomCountDownContainer>

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
        </DashboardContainer>
      </StyledDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
