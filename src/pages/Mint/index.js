import React from "react";
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
  StyledDashboard,
  StyledSubNav,
  SubAction,
  SubActionGroup,
  SubActionIcon,
  SubActionTitle,
  SubSignin,
  ValueView,
} from "./style";

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
        <SubSignin>Sign in</SubSignin>
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
        </DashboardContainer>
      </StyledDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
