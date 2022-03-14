import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import SubNavbar from "../SubNavbar";
import Footer from "../Footer";
import { LayoutContainer, MainContainer, MainLayout, StyledApp } from "./style";
import { isScreenWidth } from "../../utils/getScreenWidth";

const AppLayout = (props) => {
  // const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(1000));
    });
    setIsMobile(isScreenWidth(1000));
  }, []);
  return (
    <StyledApp>
      <LayoutContainer>
        <Sidebar isMobile={isMobile} />
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
