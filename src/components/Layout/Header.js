import React, {useState} from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";



import MenuIcon from "@mui/icons-material/Menu";
import {Link,NavLink} from "react-router-dom";
import "../../styles/HeaderStyle.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle =() => {
    setMobileOpen(!mobileOpen)
  }
  //menu drower
  const drawer =(
    <Box onclick={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography color={"green"} 
      variant="h6" 
      componant="div" 
      sx={{ flexGrow:1}} >
               Luxuer Resturant
            </Typography>
            <Divider/>
               <ul className="mobile-navigation">
                <li>
                  <Link to ={"/"}>Home </Link>
                </li>
                <li>
                  <Link to ={"/menu"}>Menu </Link>
                </li>
                <li>
                  <Link to ={"/about"}>About </Link>
                </li>
                <li>
                  <Link to ={"/contact"}>Contact </Link>
                </li>
               </ul>
    </Box>
  );

  return (
    <>
        <Box>
          <AppBar componant={"nav"} sx={{ bgcolor: "black" }}>
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm:"none"},}}
              onclick={handleDrawerToggle} >
                 <MenuIcon/>
              </IconButton>
            <Typography color={"green"} 
            variant="h6" 
            componant="div" 
            sx={{ flexGrow:1}} >
             Luxury Resturant
            </Typography>
            <Box sx={{display:{xs:"none", sm: "block"}}}>
               <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to ={"/"}>Home </NavLink>
                </li>
                <li>
                  <NavLink to ={"/menu"}>Menu </NavLink>
                </li>
                <li>
                  <NavLink to ={"/about"}>About </NavLink>
                </li>
                <li>
                  <NavLink to ={"/contact"}>Contact </NavLink>
                </li>
               </ul>
            </Box>
            </Toolbar>
          </AppBar>
          <Box componant="nav">
               <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} 
               sx={{display: {xs:"block", sm:"none"}, width:"200px"}} >
                {drawer}
               </Drawer>
          </Box>
          <Box>
          <Toolbar/>
          </Box>
        </Box>
    </>
  );
};

export default Header;