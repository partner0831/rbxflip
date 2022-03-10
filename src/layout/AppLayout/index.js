import React from "react";
import Navbar from "../Navbar";
import { StyledLayout } from "./style";
const AppLayout = (props) => {
  return (
    <StyledLayout>
      <Navbar></Navbar>
      {props.children}
    </StyledLayout>
  );
};
export default AppLayout;
