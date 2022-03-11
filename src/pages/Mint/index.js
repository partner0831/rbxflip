import React from "react";
import {
  CountDesc,
  CountText,
  DashboardContainer,
  DashHeader,
  GameView,
  HistoryText,
  HistoryView,
  StyledDashboard,
  ValueView,
} from "./style";

const Dashboard = () => {
  return (
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
            <HistoryText>PAST100</HistoryText>
          </HistoryView>
        </DashHeader>
      </DashboardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
