import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {

  const buttonStyle: React.CSSProperties = 
  {
    textTransform: 'none',
    color: 'rgba(255,255,255,.55)',
    fontSize: '16px',
    padding: '6px',
  };

  return (
    <Box sx={{ 
      flexGrow: 1,
        }}>
      <AppBar 
        position="sticky"
        style={{ 
          backgroundColor: 'black',
          borderBottom: '1px rgba(255,255,255,.55)',
          alignItems: 'right',
        }}
        >
        <Toolbar style={{justifyContent: "flex-end", marginRight: "5%", marginLeft: "5%",  borderBottom: '1px solid rgba(255,255,255,.55)',}}>
          <Button style={{...buttonStyle, fontSize: '20px', padding: '5px 8px'}}>Todd Pangilinan</Button>
          <Button style={buttonStyle}>Home</Button>
          <Button style={buttonStyle}>Blog</Button>
          <Button style={buttonStyle}>About</Button>
          <Button style={buttonStyle}>Skills</Button>
          <Button style={buttonStyle}>Projects</Button>
          <Button style={buttonStyle}>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}