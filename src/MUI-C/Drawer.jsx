import {
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  useTheme,
  IconButton, Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
const Drawerr = ({
  drawerWidth,
  setModee,
  none,
  drawerType,
  setNone,
  highDrawer,
}) => {
  const currentLocation = useLocation();
  // console.log(currentLocation.pathname)
  const navigate = useNavigate();
  const theme = useTheme();
  // const tog = () => {
  //   setModee(theme.palette.mode === "light" ? "dark" : "light");
  // };

  const mylist = [
    {
      name: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      name: "Create",
      icon: <CreateIcon />,
      path: "/create",
    },
    {
      name: "Profile",
      icon: <PersonIcon />,
      path: "/profile",
    },
  
    {
      name: "Settings",
      icon: <SettingsIcon />,
      path: "/settings",
    },
  
  ];

  return (
    <Drawer
      sx={{
        display: { xs: none, sm: "block" },

        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        highDrawer();
      }}
    >
      {/* <Button onClick={()=>{tog()}} sx={{mt:'10px',mb:'15px'}} variant="contained" color="error">
      Dark
    </Button> */}
      {/* <Toolbar /> */}

      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", color: "warning" }}
        >
          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={() => {
              localStorage.setItem(
                "curmode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setModee(theme.palette.mode === "light" ? "dark" : "light");
            }}
          >
            {theme.palette.mode === "light" ? (
              <Brightness4 />
            ) : (
              <Brightness7 sx={{ color: "orange" }} />
            )}
             
          </IconButton>
          <Typography ml={1} variant="h4"> MY WEB</Typography>
        </ListItem>
        <Divider />

  {mylist.map((item)=>{
    return(

      <ListItem
      key={item.name}
      sx={{
        bgcolor:
          currentLocation.pathname === item.path
            ? theme.palette.Greey.main
            : null,
      }}
      disablePadding
    >
      <ListItemButton
        onClick={() => {
          navigate(item.path);
        }}
      >
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>

    )
  })}









        <ListItem
          sx={{
            bgcolor:
              currentLocation.pathname === "" ? theme.palette.Greey.main : null,
          }}
          disablePadding
        >
          <ListItemButton
          
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
