import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }} // Initial opacity set to 0 (completely transparent)
    animate={{ opacity: 1 }} // Animation to increase opacity to 1 (fully visible)
    transition={{ duration: 0.5 }} >
    <Container
    maxWidth = '100%'
  
    sx={
      {
        top : 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh', // Adjust the height as needed
        backgroundImage: 'url("https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    } >
      <Box 
       display='flex'
       justifyContent='center'
       alignItems='center'
      sx={{ mt: 8, backgroundColor : 'secondary.darkest', p: 4, width : 700 }}>
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>
          <Box>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography variant="body1">1234 Elm Street</Typography>
            <Typography variant="body1">City, State ZIP</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1" >
              <Link href="mailto:example@gmail.com" sx={{ color : 'primary.darkest'}}>example@gmail.com</Link>
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography variant="body1">123-456-7890</Typography>
          </Box>
        </Grid>

        {/* Sidebar with Social Media Links */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Connect with Us
          </Typography>
          <List>
            <ListItem button component={Link} href="https://www.facebook.com">
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem button component={Link} href="https://www.instagram.com">
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
            <ListItem button component={Link} href="mailto:example@gmail.com">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem button component={Link} href="https://www.twitter.com">
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      </Box>
    </Container></motion.div>
  );
};

export default Contact;
