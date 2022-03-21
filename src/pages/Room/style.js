import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDashboard = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1;
`;
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  flex: 1 1;
  background: #2c2d46;
  height: 500px;
`;
export const DashHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
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
  @media (max-width: 768px) {
    margin-right: 0px;
  }
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
  @media (max-width: 768px) {
    margin-right: 0px;
  }
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
  max-width: 80px;
`;
export const CloseAction = styled.div`
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: white;
  max-width: 80px;
`;
export const NFTView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ModalBtnView = styled.div`
  display: flex;
  margin-top: 15px;
  & > *:not(:last-child) {
    margin-right: 15px;
  }
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
  max-height: 300px;
  overflow-y: auto;
`;
export const StyledRoom = styled.div`
  transform: translateX(0);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.flag ? "#343692" : "#343654")};

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
  align-items: center;
  cursor: pointer;
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
export const RoomWaitButton = styled.div`
  background: #07bc0c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
`;
export const RoomStartButton = styled.div`
  background: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
`;
export const RoomApproveButton = styled.button`
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: disabled;
`;
export const RoomViewButton = styled.div`
  background: #f89e1b;
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
export const StatusImg = styled.img`
  width: 25px;
  height: 25px;
`;
export const StatusView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;
