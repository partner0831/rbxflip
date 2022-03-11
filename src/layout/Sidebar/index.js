import React from "react";
import { LogImg, LogoContainer, StyledSidebar } from "./style";
import logo from "../../assets/img/image.png";
export default function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer>
        <LogImg src={logo} />
      </LogoContainer>
    </StyledSidebar>
  );
}
