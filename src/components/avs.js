import React from 'react';
import {Paper, Box, Typography} from '@mui/material';
import HorizontalLinearStepper from './multistep';
const About = () =>{
  return(
    <React.Fragment>
    <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         
       }}
     >
       <Paper elevation={3} sx={{
         display: 'flex',
         flexWrap: 'wrap',
         minWidth: 600,
       }}>
        <HorizontalLinearStepper />
       </Paper>
     </Box>
     </React.Fragment>
  );
}

export default About;
