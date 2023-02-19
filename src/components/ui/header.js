import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { css } from '@emotion/react';
import { alpha, styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/logomain.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import {useContext} from 'react';
const TabStyled = styled(Tab)(({ theme }) => ({
textTransform:"none",
fontFamily:"Ubuntu",
marginLeft:"50px",
color:"#000000"
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
textTransform:"none",
fontFamily:"Ubuntu",
backgroundcolor:"secondary",
borderRadius:"10px",
marginLeft: "40px",
marginRight: "40px",
height: "35px",
color:"white",
}));

const LogoBtnStyled = styled(Button)(({theme})=>({
}));

const LisTextStyled = styled(ListItemText)(({theme})=>({
}));

const DrawerStyled = styled(SwipeableDrawer)(({theme})=>({

}));
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



export default function Header(props){

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };

 var tabs = (<React.Fragment> </React.Fragment>);


tabs = (
    <React.Fragment>
    <Tabs value={value} onChange={handleChange} textColor="white" indicatorColor="secondary" sx={{marginLeft:'auto'}}>
    <TabStyled component={Link} to="/" label="Home" />
    <TabStyled component={Link} to="/about" label="About Us"/>
    </Tabs>
    <ButtonStyled component={Link} to="/contact" variant="contained" color="secondary">Contact</ButtonStyled>
    </React.Fragment>
  );


const drawer = (
  <React.Fragment>
    <DrawerStyled PaperProps={{sx:{bgcolor:'primary.main', color:'white'}}}disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>{
      setOpenDrawer(false)}} onOpen={()=>{setOpenDrawer(true)}}>
      <List>
          <ListItem divider button onClick={()=>{setOpenDrawer(false)}} component={Link} to="/" disablePadding>
            <ListItemButton>
              <LisTextStyled primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem divider button onClick={()=>{setOpenDrawer(false)}} component={Link} to="/about" disablePadding>
            <ListItemButton>
              <LisTextStyled primary="About Us" />
            </ListItemButton>
          </ListItem>
          <ListItem divider button onClick={()=>{setOpenDrawer(false)}} component={Link} to="/contact" disablePadding>
            <ListItemButton sx={{bgcolor:'secondary.main'}} >
              <LisTextStyled primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
    </DrawerStyled>
    <IconButton sx={{marginLeft:"auto",color:"white",}} onClick={()=>{setOpenDrawer(!openDrawer)}} disableRipple>
      <MenuIcon sx={{height:"35px",width:"35px"}}/>
    </IconButton>
  </React.Fragment>
)
 useEffect(()=>{
   if (window.location.pathname === "/" && value !==0 ){
     setValue(0)
   }else if (window.location.pathname === "/about" && value !==1 ){
     setValue(2)
   }
 },[value]);

  return(
    <React.Fragment>
    <ElevationScroll>
    <AppBar position = "fixed" color="primary">
      <Toolbar>

      <Box
        component="img"
        sx={{ height: 130,
          marginLeft: 1, }}
        alt="Logo"
        src={logo}
      />
      
          {matches ? drawer: tabs}
      </Toolbar>
    </AppBar>
    </ElevationScroll>
    <Box sx={(theme) =>({
    border: 0,
    minHeight: 90,
    [theme.breakpoints.down("md")]:{
      minHeight:64,
    }
  })} />
    </React.Fragment>
  )
}
