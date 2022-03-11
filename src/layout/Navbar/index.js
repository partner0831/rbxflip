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
            <TermText>Discord</TermText>
          </SocialItem>
          <SocialItem>
            <TermText>Twitter</TermText>
          </SocialItem>
        </SocialView>
      </NavbarContainer>
    </StyledNavbar>
  );
}
