import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  font-size: 18px;
  color: #9c9ebb;
`;

export const SubActionGroup = styled.div`
  display: flex;
`;

export const SubActionIcon = styled.p`
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

export const SubActionTitle = styled.span`
  position: relative;
  display: flex;
  margin-left: 7px;
`;

export const SubAction = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    color: #3185ff;
  }
`;

export const StyledDashboard = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1;
  min-height: 500px;
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
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  flex-shrink: 0;
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

export const HistoryActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CreateAction = styled.div`
  background: #3185ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: white;
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
//-------------------------------------------------------
export const CreateView = styled.div`
  height: 300px;
  overflow-y: auto;
`;
export const StyledRoom = styled.div`
  transform: translateX(0);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #343654;
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  width: 100%;
  border-radius: 17px;
  margin-bottom: 18px;
  flex-shrink: 0;
  transition: all 0.5s ease;
`;

export const RoomUsers = styled.div`
  display: flex;
  align-items: center;
  width: 222px;
`;

export const RoomUserVs = styled.div`
  margin: 0 20px;
  font-weight: 800;
`;

//----------------------------------------------------------------

export const RoomCountDownContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
`;

export const RoomCountDown = styled.div`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
`;
export const RoomCountDownBack = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`;

export const RoomCountDownBackImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 0px;
  border: none;
  padding: 0px;
`;

export const RoomCountDownImage = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

//--------------------------------------------------------------

export const RoomControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
`;

export const RoomControlsTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  margin: 0;
`;

//------------------------------------------------------

export const RoomButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomJoinButton = styled.div`
  background: rgb(49, 133, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
`;

export const RoomButtonJoinContent = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;
