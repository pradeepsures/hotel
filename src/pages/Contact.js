import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
const Contact = () => {
  return (
    <Layout>
    <Box sx={{my:8 ,ml:10, "& h4":{fontWeight:"bold",mb:2}}}>
      <Typography variant="h4">
        Contact With me
      </Typography>
        <p>
        From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, 
            Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users 
            just like you, to find your next great meal.
        </p>
    </Box>
    <Box sx={{m:3, width:"600px", ml:10, "@media (max-width:600px)":{
      width:"300px"
    }}} >
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"black", color:"white",fontWeight:"bold",fontSize:"25px"}}align="center"  >
                Contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <LocalPhoneIcon sx={{color:"green",pt:1}} /> 738363xxxx (Owner)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <EmailIcon sx={{color:"green",pt:1}} /> pradeepkumarnp0507@gmail.com (Owner)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <WifiCalling3Icon sx={{color:"green",pt:1}} /> 991965xxxx (Helper)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Layout>
  );
};

export default Contact;