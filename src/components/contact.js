import React from 'react';
import {Paper, Box, Typography} from '@mui/material';
const Contact = () =>{
  return(
    <React.Fragment>
    <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         '& > :not(style)': {
           m: 10,
           width: "150",
           height: "100%",
         },
       }}
     >
       <Paper elevation={3}>

       <Box   direction="column"
  alignItems="center"
  justifyContent="center">
        <Typography variant="h4" sx={{m:5}}>Contact</Typography>
        <Typography sx={{m:5}}>
  
Contact Us: yalcintr@stanford.edu
        </Typography>
        <Typography sx={{m:5}}>
  

  </Typography>
  <Typography sx={{m:5}}>
  

  </Typography>
  </Box>
       </Paper>
     </Box>
     </React.Fragment>
  );
}

export default Contact;
