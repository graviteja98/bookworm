import React from 'react';
import { Typography, List,  ListItemText, ListItemButton, IconButton } from '@mui/material';

import CampaignIcon from '@mui/icons-material/Campaign';

const Footer = () => {

  return (
    <>
      <footer  style={{ display: 'flex', justifyContent: 'space-around', backgroundColor : 'whitesmoke' }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: contact@example.com
          </Typography>
          <Typography variant="body2">Phone: +1 123-456-7890</Typography>
        </div>
        <div >
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <List>
           <ListItemButton>
              <ListItemText primary="Twitter" />
              </ListItemButton>
              <ListItemButton>
              <ListItemText primary="Facebook" />
              </ListItemButton>
              <ListItemButton>
              <ListItemText primary="Instagram" />
              </ListItemButton>
          </List>
        </div>
        <div className="footer-section">
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          </Typography>
          <Typography variant="body2">Aliquam et metus pharetra, bibendum massa nec, ultrices velit. Nulla facilisi.</Typography>
        </div>
      </footer>
      <div className="footer-line" style={{ borderTop: '1px solid #ccc', marginTop: '16px' }}></div>
      <footer className="footer2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={()=>{console.log('hey')}}>
   <CampaignIcon/>
        </IconButton>
      </footer>
    </>
  );
};

export default Footer;
