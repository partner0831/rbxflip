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
  HistoryAction,
  HistoryActions,
  HistoryAvatar,
  HistoryStatus,
  HistoryText,
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

import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import mark1 from "../../assets/img/mark1.png";
import mark2 from "../../assets/img/mark2.png";
import bigback from "../../assets/img/bigback.svg";
import bigmark1 from "../../assets/img/bigmark1.png";
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
        {currentAcc ? (
          <Identicon address={currentAcc} />
        ) : (
          "Connect your wallet."
        )}
      </StyledSubNav>
      <StyledDashboard>
        <DashboardContainer>
          <DashHeader>
            <ValueView>
              <CountText>0</CountText>
              <CountDesc>Value</CountDesc>
            </ValueView>
            <GameView>
              <CountText>0</CountText>
              <CountDesc>Games</CountDesc>
            </GameView>
            <HistoryView>
              <HistoryStatus>
                <HistoryText>PAST100</HistoryText>
                <HistoryAvatar bgColor="#74d878" fontColor="#317534">
                  R
                </HistoryAvatar>
                <HistoryText fontColor="white">53</HistoryText>
                <HistoryAvatar bgColor="#f89e1b" fontColor="#97641b">
                  T
                </HistoryAvatar>
                <HistoryText fontColor="white">47</HistoryText>
              </HistoryStatus>
              <HistoryActions>
                <HistoryAction>History</HistoryAction>
                {currentAcc ? <CreateAction>Create</CreateAction> : ""}
              </HistoryActions>
            </HistoryView>
          </DashHeader>
          <CreateView>
            <StyledRoom>
              <RoomUsers>
                <RoomUser avatar={user1} mark={mark1} />
                <RoomUserVs>
                  <p>{"VS"}</p>
                </RoomUserVs>
                <RoomUser avatar={user2} mark={mark2} />
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
                <RoomUser avatar={user1} mark={mark1} />
                <RoomUserVs>
                  <p>{"VS"}</p>
                </RoomUserVs>
                <RoomUser avatar={user2} mark={mark2} />
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
                <RoomUser avatar={user1} mark={mark1} />
                <RoomUserVs>
                  <p>{"VS"}</p>
                </RoomUserVs>
                <RoomUser avatar={user2} mark={mark2} />
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
          </CreateView>
        </DashboardContainer>
      </StyledDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
