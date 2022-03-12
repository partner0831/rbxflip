import React from "react";
import {
  NavbarContainer,
  SocialItem,
  SocialView,
  StyledNavbar,
  TermContainer,
  TermText,
  TermView,
} from "./style";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
export default function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContainer>
        <TermContainer>
          <TermView>
            <TermText>Provably Fair</TermText>
          </TermView>
          <TermView>
            <TermText>Terms Of Service</TermText>
          </TermView>
          <TermView>
            <TermText>FAQ</TermText>
          </TermView>
          <TermView>
            <TermText>Leaderboards</TermText>
          </TermView>
          <TermView>
            <TermText>Stats</TermText>
          </TermView>
          <TermView></TermView>
        </TermContainer>
        <SocialView>
          <SocialItem>
            <FaDiscord size="25" />
            <TermText>Discord</TermText>
          </SocialItem>
          <SocialItem>
            <FaTwitterSquare size="20" />
            <TermText>Twitter</TermText>
          </SocialItem>
        </SocialView>
      </NavbarContainer>
    </StyledNavbar>
  );
}
