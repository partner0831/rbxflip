import React from "react";
import Identicon from "../../components/Identicon";
import { useEthContext } from "../../context/EthereumContext";
import {
  StyledSubNav,
  SubAction,
  SubActionGroup,
  SubActionIcon,
  SubActionTitle,
} from "./style";
const SubNavbar = () => {
  const { currentAcc } = useEthContext();
  return (
    <StyledSubNav>
      <SubActionGroup>
        <SubAction>
          <SubActionIcon></SubActionIcon>
          <SubActionTitle>Rooms</SubActionTitle>
        </SubAction>
        <SubAction>
          <SubActionIcon></SubActionIcon>
          <SubActionTitle>History</SubActionTitle>
        </SubAction>
      </SubActionGroup>
      {currentAcc && <Identicon address={currentAcc} size={2.5} />}
    </StyledSubNav>
  );
};

export default SubNavbar;
