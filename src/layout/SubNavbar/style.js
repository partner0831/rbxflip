import styled from "styled-components";

export const StyledSubNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
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
