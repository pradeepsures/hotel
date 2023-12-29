import React from "react";
import {MenuList} from "../data/data";
import Layout from "./../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,  } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          {
            MenuList.map(menu => (
              <Card sx={{maxWidth:"390px", display:"flex", m:2 }}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:"400px"}} 
                  component={'img'}  
                  src={menu.image} 
                  alt={menu.name} 
                  />
                  <CardContent>
                    <Typography varient="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography varient="body2">
                      {menu.description}
                    </Typography>
                    <Typography varient="body2">
                      {menu.price} &#8377;
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
  );
};

export default Menu;