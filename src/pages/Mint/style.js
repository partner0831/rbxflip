import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: #1d1f32;
`;
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  flex: 1 1;
  background: #2c2d46;
  overflow: auto;
  overflow-x: hidden;
`;
export const DashHeader = styled.div`
  display: flex;
`;
export const ValueView = styled.div`
  background: #3185ff;
  margin-right: 18px;
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  flex: 1 1;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
`;
export const GameView = styled.div`
  background: #f89e1b;
  margin-right: 18px;
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  flex: 1 1;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
`;
export const HistoryView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  background: #343654;
  border-radius: 17px;
  flex: 0.5 1;
`;
export const HistoryText = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
export const CountText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
export const CountDesc = styled.span`
  color: white;
  opacity: 0.65;
  font-size: 18px;
  font-weight: 700;
`;
