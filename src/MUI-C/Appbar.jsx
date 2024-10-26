import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Link, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Appbar = ({  drawerWidth,showDrawer }) => {
  const navigatee = useNavigate();
  return (
    <AppBar
      sx={{
        
      width: {sm:`calc(100% - ${drawerWidth}px)`}, 
      ml: {xs:0,sm:`${drawerWidth}px` },}}
      position="static"  >
      
      <Toolbar>
      <IconButton 
      onClick={()=>{
        showDrawer();
      }}
      sx={{ display:{sm:"none"},mr: "10px" }}>
      <MenuIcon/>
      </IconButton>
        <Link
        onClick={()=>{navigatee("/")}}
          
          color="inherit"
          sx={{cursor: "pointer",
            flexGrow: 1,
            textDecoration: "none",
            fontSize: "20px",
            "&:hover": { fontSize: "23px" },
          }}
        >
          My Expanses
        </Link>
        <Typography
          variant="body1"
          color="inherit"
          sx={{ mr: "20px", fontSize: "20px" }}
        >
          Ahmed Shawky
        </Typography>
        <Avatar alt="" src="./assets/mee.jpg" sx={{ width: 56, height: 56 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
