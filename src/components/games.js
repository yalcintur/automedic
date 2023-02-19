import React from 'react';
import {Grid, Paper, Box, Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

export default function Games(){

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

return(
  <Box sx={{ flexGrow: 1 }}>
   <Grid sx={{display: 'flex', aligItems: 'center',justifyContent: 'center'}}container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/avs" item xs={4} sm={6} md={4}>
        <Item>
         <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={require('../assets/avstool.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                After Visit Summary
                  </Typography>
              <Typography variant="body2" color="text.secondary">
              The after visit summary (AVS) is a paper or electronic document given to patients after a medical appointment, which is intended to summarize patients' health and guide future care, including self-management tasks.
              </Typography>
              </CardContent>
              </CardActionArea>
          </Card>
         </Item>
       </Grid>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/about" item xs={4} sm={6} md={4}>
         <Item> <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
           <CardMedia
             component="img"
             height="300"
             image={require('../assets/prescription.png')}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               Prescription(Coming soon!)
                   </Typography>
               <Typography variant="body2" color="text.secondary">
               A prescription, often abbreviated ℞ or Rx, is a formal communication from a physician or other registered health-care professional to a pharmacist, authorizing them to dispense a specific prescription drug for a specific patient.               </Typography>
               </CardContent>
               </CardActionArea>
           </Card></Item>
       </Grid>
       <Grid sx={{textDecoration:"none", display: 'flex', aligItems: 'center',justifyContent: 'center'}} component={Link} to="/about" item xs={4} sm={6} md={4}>
         <Item> <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
           <CardMedia
             component="img"
             height="300"
             image={require('../assets/mrireport.png')}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               MRI Report(Coming soon!)
                   </Typography>
               <Typography variant="body2" color="text.secondary">
               MRI can be used to detect brain tumors, traumatic brain injury, developmental anomalies, multiple sclerosis, stroke, dementia, infection, and the causes of headache. Our service turns MRI image into a text report.</Typography>
               </CardContent>
               </CardActionArea>
           </Card></Item>
       </Grid>
   </Grid>
 </Box>
)
}
