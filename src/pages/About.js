import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4": {
            mt:10,
            fontWeight:"bold",
            my:2,
            fontSize:"2rem"
          },
          "& p":{
            textAlign:"justigy"
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4": '1.5rem',
          }
        }}>
          <Typography variant="h4">
            Welcome to my Resturant
          </Typography>
          <p>
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
          </p>
          <br/>
          <p>
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
          </p>
        </Box>
    </Layout>
  );
};

export default About;