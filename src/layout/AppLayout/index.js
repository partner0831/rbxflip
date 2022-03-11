import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { StyledLayout, LayoutContainer } from "./style";
const AppLayout = (props) => {
  return (
    <StyledLayout>
      <LayoutContainer>
        <Sidebar />
        <div>
          <Navbar />
          {props.children}
          <Footer />
        </div>
      </LayoutContainer>
    </StyledLayout>
  );
};
export default AppLayout;
