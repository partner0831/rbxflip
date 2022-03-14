import styled from "styled-components";
export const SidebarContainer = styled.div`
  display: ${(props) => (props.isMobile ? "none" : "block")};
`;
export const StyledSidebar = styled.div`
  width: 290px;
  background-color: #2c2d46;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;
`;
export const LogImg = styled.img`
  width: 200px;
  height: 63px;
`;
export const ConnectView = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ConnectText = styled.span`
  font-weight: 700;
  color: white;
`;
export const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border: none;
  background: #2f84fa;
  border-radius: 20px;
`;
