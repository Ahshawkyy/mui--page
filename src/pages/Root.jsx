import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-C/Appbar";
import Drawerr from "../MUI-C/Drawer";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {  grey } from "@mui/material/colors";
import "../index.css";
const Root = () => {
  const [modee, setModee] = useState(
    localStorage.getItem("curmode") === null
      ? "light"
      : localStorage.getItem("curmode") === "light"
      ? "light"
      : "dark"
  );
  const drawerWidth = 240;
  const darkTheme = createTheme({
    palette: {
      mode: modee,
      ///to add palette
      ...(modee === "light"
        ? {
          // palette values for light mode
          Greey: {
            main: grey[300],
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
          },
        }
        : {
          // palette values for dark mode
          Greey: {
            main: grey[800],
            light: '##e3f2fd',
            dark: '#42a5f5',
            contrastText: '#fff',
          },
        
          
        }),
        ///till here
    },
        
      })
 const [none,setNone]=useState("none");
 const [drawerType,setDrawerType]=useState("permanent");

const showDrawer = () => {
  setDrawerType("temporary");
  setNone("block");
};
const highDrawer = () => {
  setDrawerType("permanent");
  setNone("none");
}  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth}
        showDrawer={showDrawer} />

        <Drawerr drawerWidth={drawerWidth} 
        setModee={setModee}
        none={none}
        setNone={setNone}
        drawerType={drawerType}
        highDrawer={highDrawer}
        showDrawer={showDrawer}
         />
        <Box
        component="main"
          sx={{
            
            mt: "30px",
            ml: {sm:`${drawerWidth}px`},
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
