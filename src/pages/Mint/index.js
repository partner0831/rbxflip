import React from "react";
import RoomUser from "../../components/RoomUser";
import {
  CountDesc,
  CountText,
  CreateAction,
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
  RoomButtonViewContent,
  RoomControls,
  RoomControlsSubTitle,
  RoomControlsTitle,
  RoomCountDown,
  RoomCountDownBack,
  RoomCountDownBackImage,
  RoomCountDownContainer,
  RoomCountDownImage,
  RoomItem,
  RoomItemBack,
  RoomItemBackImage,
  RoomItemContainer,
  RoomItemDiv,
  RoomItemImage,
  RoomItems,
  RoomItemsContainer,
  RoomJoinButton,
  RoomUsers,
  RoomUserVs,
  RoomViewButton,
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
import itemback from "../../assets/img/itemback.svg";
import angry from "../../assets/img/angry.png";
import happy from "../../assets/img/happy.png";
import cap from "../../assets/img/cap.png";

const Dashboard = () => {
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
        {/* <SubSignin>Sign in</SubSignin> */}
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
                <CreateAction>Create</CreateAction>
              </HistoryActions>
            </HistoryView>
          </DashHeader>
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
            <RoomItemsContainer>
              <RoomItems>
                <RoomItemContainer>
                  <RoomItem>
                    <RoomItemDiv>
                      <RoomItemBack>
                        <RoomItemBackImage src={itemback} />
                      </RoomItemBack>
                      <RoomItemImage src={happy} />
                    </RoomItemDiv>
                  </RoomItem>
                </RoomItemContainer>
                <RoomItemContainer>
                  <RoomItem>
                    <RoomItemDiv>
                      <RoomItemBack>
                        <RoomItemBackImage src={itemback} />
                      </RoomItemBack>
                      <RoomItemImage src={cap} />
                    </RoomItemDiv>
                  </RoomItem>
                </RoomItemContainer>
                <RoomItemContainer>
                  <RoomItem>
                    <RoomItemDiv>
                      <RoomItemBack>
                        <RoomItemBackImage src={itemback} />
                      </RoomItemBack>
                      <RoomItemImage src={angry} />
                    </RoomItemDiv>
                  </RoomItem>
                </RoomItemContainer>
              </RoomItems>
            </RoomItemsContainer>
            <RoomControls>
              <RoomControlsTitle>{"230k"}</RoomControlsTitle>
              <RoomControlsSubTitle>{"R$ 108k - R$ 66k"}</RoomControlsSubTitle>
            </RoomControls>
            <RoomButtons>
              <RoomJoinButton>
                <RoomButtonJoinContent>Join</RoomButtonJoinContent>
              </RoomJoinButton>
              <RoomViewButton>
                <RoomButtonViewContent>View</RoomButtonViewContent>
              </RoomViewButton>
            </RoomButtons>
          </StyledRoom>
        </DashboardContainer>
      </StyledDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
