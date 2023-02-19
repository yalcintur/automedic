import React from 'react';
import {Paper, Box, Typography} from '@mui/material';
const About = () =>{
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
        <Typography variant="h4" sx={{m:5}}>About</Typography>
        <Typography sx={{m:5}}>
  
        AutoMedic is a cutting-edge startup that harnesses the power of artificial intelligence (AI) to revolutionize the way medical personnel write medical reports, including after visit summaries. Our mission is to improve the accuracy, efficiency, and overall quality of medical documentation, which is critical to delivering high-quality patient care.At AutoMedic, we believe that medical reports should be clear, concise, and easy to understand for both medical professionals and patients. Unfortunately, many medical reports are overly complex, difficult to read, and prone to errors, which can have serious consequences for patients' health and wellbeing. That's where our AI-powered platform comes in.Our platform uses advanced machine learning algorithms to analyze medical data and generate accurate and comprehensive medical reports and after visit summaries. Our system is designed to be user-friendly and intuitive, making it easy for medical personnel to create high-quality reports without spending hours poring over patient data.

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

export default About;
