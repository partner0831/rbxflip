import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { LayoutContainer, MainContainer, MainLayout, StyledApp } from "./style";
const AppLayout = (props) => {
  return (
    <StyledApp>
      <LayoutContainer>
        <Sidebar />
        <MainLayout>
          <Navbar />
          <MainContainer>
            {props.children}
            <Footer />
          </MainContainer>
        </MainLayout>
      </LayoutContainer>
    </StyledApp>
  );
};
export default AppLayout;
