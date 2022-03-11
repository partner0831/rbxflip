import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { LayoutContainer, MainContainer } from "./style";
const AppLayout = (props) => {
  return (
    <div>
      <LayoutContainer>
        <Sidebar />
        <MainContainer>
          <Navbar />
          {props.children}
          <Footer />
        </MainContainer>
      </LayoutContainer>
    </div>
  );
};
export default AppLayout;
