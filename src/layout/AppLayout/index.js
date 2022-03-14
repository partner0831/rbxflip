import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import SubNavbar from "../SubNavbar";
import Footer from "../Footer";
import { LayoutContainer, MainContainer, MainLayout, StyledApp } from "./style";
const AppLayout = (props) => {
  return (
    <StyledApp>
      <LayoutContainer>
        <Sidebar />
        <MainLayout>
          <Navbar />
          <SubNavbar />
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
