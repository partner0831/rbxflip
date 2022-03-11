import styled from "styled-components";
export const StyledNavbar = styled.div`
  width: 100%;
  height: 45px;
  background-color: #191b2d;
  display: flex;
  align-items: center;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const TermContainer = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin: 0 35px 0 0;
  }
`;
export const TermView = styled.div``;
export const TermText = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
export const SocialView = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin: 0 35px 0 0;
  }
`;
export const SocialItem = styled.div``;
