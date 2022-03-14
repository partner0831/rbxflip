import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: #1d1f32;
`;
export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;
export const MainLayout = styled.div`
  width: calc(100% - 290px);
  @media (max-width: 1000px) {
    width: 100%;
    min-height: 100vh;
  }
`;
export const MainContainer = styled.div`
  padding: 0 53px;
  background-color: #1d1f32;
`;
