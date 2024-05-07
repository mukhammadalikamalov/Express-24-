import { Box } from "@mui/material";
import React from "react";
import ButtonAppBar from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <ButtonAppBar />
      <Box sx={{ marginTop: "2%" }}>{children}</Box>
    </div>
  );
};

export default Layout;
